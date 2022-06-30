from typing import List
from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from pycoingecko import CoinGeckoAPI  # https://github.com/man-c/pycoingecko
from app.utilities.calculations import add_mkt_share
from app import shemas
from sqlalchemy.orm import Session
from app.db.database import get_db


index_router = router = APIRouter()


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=shemas.Index)
def create_index(index: shemas.Index, db: Session = Depends(get_db)):
    print(index)
    return index
