from typing import Any, Optional
from fastapi import Depends
from sqlalchemy.orm import Session


from sqlalchemy import and_
from app.db.database import get_db

from app import models


def get_indizes(
    user_id: Any = 1,
    limit: int = 10,
    skip: int = 0,
    search: Optional[str] = "",
    db: Session = Depends(get_db),
):
    indizes = (
        db.query(models.Index)
        # .filter_by(models.Index.user_id == user_id)
        .join(models.Coin, models.Index.index_id == models.Coin.index_id, isouter=True)
        # .group_by(models.Index.index_id)
        # .filter(and_(models.Index.index_name.contains(search)), models.Index.user_id == user_id))
        .filter(
            and_(
                models.Index.index_name.contains(search),
                models.Index.user_id == (user_id),
            )
        )
        .limit(limit)
        .offset(skip)
        .all()
    )

    return indizes


def get_coin(
    index_id: Optional[int] = 0,
    db: Session = Depends(get_db),
    id: Optional[str] = "",
):
    coin = (
        db.query(models.Coin)
        .filter(
            and_(
                models.Coin.index_id == (index_id),
                models.Coin.id.contains(id),
            )
        )
        .all()
    )

    return coin
