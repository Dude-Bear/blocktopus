from pydantic import BaseModel, EmailStr, HttpUrl
from datetime import datetime
from typing import List, Optional

from pydantic.types import conint


class CoinBase(BaseModel):
    id: str
    symbol: str
    name: str
    image: HttpUrl
    current_price: float
    market_cap: float


# Answer shema for coindata request from frontend
class Coin(CoinBase):
    market_cap_rank: Optional[float]
    price_change_percentage_200d_in_currency: Optional[float]
    price_change_percentage_30d_in_currency: Optional[float]
    price_change_percentage_7d_in_currency: Optional[float]
    market_share: Optional[float]


# Additional information that can be sent per post request when creating a new index
class CoinEntryForIndex(CoinBase):
    proportion_invested: Optional[float]
    personal_index_market_share: Optional[float]


class Index(BaseModel):
    user_id: int
    index_name: Optional[str]
    total_investment: Optional[float]
    list_of_coins: List[CoinEntryForIndex]
