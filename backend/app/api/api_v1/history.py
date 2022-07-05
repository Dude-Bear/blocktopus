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

from tests import test_answers
from ... import models
from ...core.auth import get_current_user

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
    Get all indizes for a user
    """

    history = {}

    indizes_for_current_user = get_indizes(user_id=current_user.user_id, db=db)
    history["list_of_indizes"] = []

    print("*" * 50)
    print("1. indizes_for_current_user: ")
    print(indizes_for_current_user)
    print("*" * 50)

    print("*" * 50)
    print("2. history: ")
    print(history)
    print("*" * 50)

    for index in indizes_for_current_user:
        index_id = index.index_id
        history["list_of_indizes"].append(index)

    print("*" * 50)
    print("3. history: ")
    print(history)
    print("*" * 50)

    print("*" * 50)
    print('4. history["list_of_indizes"]: ')
    print(history["list_of_indizes"])
    print("*" * 50)

    for index in history["list_of_indizes"]:
        index_dict = index.__dict__
        index_dict["list_of_coins"] = get_coin(index_id=index.index_id, db=db)

    if not indizes_for_current_user:
        return {"results": "NONE"}

    print("*" * 50)
    print("5. indizes_for_current_user: ")
    print(indizes_for_current_user)
    print("*" * 50)

    print("*" * 50)
    print("6. history: ")
    print(history)
    print("*" * 50)

    print("*" * 50)
    print('7. history["list_of_indizez"][0]: ')
    print(history["list_of_indizes"][0].__dict__)
    print("*" * 50)

    print("*" * 50)
    print('8. history["list_of_indizes"][0].__dict__["list_of_coins"]: ')
    print(history["list_of_indizes"][0].__dict__["list_of_coins"])
    print("*" * 50)

    print("*" * 50)
    print('9. history["list_of_indizes"][0].__dict__["list_of_coins"][0].__dict__: ')
    print(history["list_of_indizes"][0].__dict__["list_of_coins"][0].__dict__)
    print("*" * 50)

    example_answer = test_answers.history_answer()
    example_answer2 = test_answers.answer2()
    print("example_answer: ")
    print(example_answer)
    return history
