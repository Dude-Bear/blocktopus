from pprint import pprint
from typing import Any, Optional
from fastapi import status, Depends, APIRouter

from sqlalchemy.orm import Session
from sqlalchemy import and_, null, or_, not_
from app.db.database import get_db
from app.schemas import History
from app.crud import get_indizes
from app.crud import get_coin
from app import schemas
from app.api.deps import get_current_user

from tests import test_answers
from ... import models

history_router = router = APIRouter()


@router.get(
    "/my-history/", status_code=status.HTTP_200_OK, response_model=schemas.History
)
def get_indizes_for_user(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
    limit: int = 10,
    skip: int = 0,
    search: Optional[str] = "",
) -> Any:
    """
    Get all indizes for current user
    """

    history = {}
    history["list_of_indizes"] = []

    indizes_for_current_user = get_indizes(user_id=current_user.user_id, db=db)

    for index in indizes_for_current_user:
        history["list_of_indizes"].append(index)

    for index in history["list_of_indizes"]:
        index_dict = index.__dict__
        index_dict["list_of_coins"] = get_coin(index_id=index.index_id, db=db)

    if not indizes_for_current_user:
        return {"results": "NONE"}

    example_answer = test_answers.history_answer()
    example_answer2 = test_answers.answer2()
    return history
