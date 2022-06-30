from typing import List
from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from pycoingecko import CoinGeckoAPI  # https://github.com/man-c/pycoingecko
from app.utilities.calculations import add_mkt_share
from app import shemas

cg = CoinGeckoAPI()

coins_router = router = APIRouter()


@router.get("/", response_model=List[shemas.Coin])
async def get_top_X(number_of_coins="500"):
    # get coindata from coingecko
    topX = cg.get_coins_markets(
        vs_currency="usd",
        price_change_percentage="7d,30d,200d",
        per_page=number_of_coins,
    )
    # return data and add the marketshare to each coin
    return add_mkt_share(topX)
