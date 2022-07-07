from typing import Any
from fastapi import status, Depends, APIRouter
from app import schemas
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.api.deps import get_current_user

from ... import models


index_router = router = APIRouter()


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=schemas.Index)
def create_index(
    index_in: schemas.Index,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
) -> Any:

    new_index = models.Index(
        user_id=current_user.user_id,
        index_name=index_in.index_name,
        total_investment=index_in.total_investment,
    )

    db.add(new_index)
    db.commit()
    db.refresh(new_index)

    for coinEntryForIndex in index_in.list_of_coins:

        coinEntryForIndex_dict = coinEntryForIndex.dict()
        coinEntryForIndex_dict["index_id"] = new_index.index_id
        new_coin_entry = models.Coin(**coinEntryForIndex_dict)
        db.add(new_coin_entry)
        db.commit()
        db.refresh(new_coin_entry)

    return index_in
