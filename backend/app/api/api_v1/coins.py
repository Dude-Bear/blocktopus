from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from pycoingecko import CoinGeckoAPI  # https://github.com/man-c/pycoingecko
from app.utilities.calculations import add_mkt_share

cg = CoinGeckoAPI()

coins_router = router = APIRouter()

# TODO: shema erstellen
@router.get("/")
async def get_top_X(number_of_coins="10"):
    # get coindata from coingecko
    topX = cg.get_coins_markets(
        vs_currency="usd",
        price_change_percentage="7d,30d,200d",
        per_page=number_of_coins,
    )
    # return data and add the marketshare to each coin
    return add_mkt_share(topX)
