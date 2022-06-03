from fastapi import FastAPI
from pycoingecko import CoinGeckoAPI

cg = CoinGeckoAPI()
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/test")
async def get_btc_price():
    return cg.get_price(ids="bitcoin", vs_currencies="usd")
