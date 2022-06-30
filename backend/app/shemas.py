from pydantic import BaseModel, EmailStr, HttpUrl
from datetime import datetime
from typing import Optional

from pydantic.types import conint


class CoinBase(BaseModel):
    id: str
    symbol: str
    name: str


class Coin(CoinBase):
    image: HttpUrl
    current_price: float
    market_cap: float
    market_cap_rank: float
    price_change_percentage_200d_in_currency: Optional[float]
    price_change_percentage_30d_in_currency: Optional[float]
    price_change_percentage_7d_in_currency: Optional[float]
    market_share: Optional[float]
