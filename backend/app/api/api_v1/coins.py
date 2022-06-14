from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from pycoingecko import CoinGeckoAPI  # https://github.com/man-c/pycoingecko

cg = CoinGeckoAPI()

coins_router = router = APIRouter()

# TODO: shema erstellen
@router.get("/")
async def get_top_100():
    return cg.get_coins_markets(vs_currency="usd", price_change_percentage="7d")
