from pydantic import BaseModel, EmailStr, HttpUrl
from datetime import datetime
from typing import List, Optional

from pydantic.types import conint


class CoinBase(BaseModel):
    id: str
    symbol: str
    name: str
    image: str
    current_price: float
    market_cap: float


# Answer shema for coindata request from frontend
class Coin(CoinBase):
    market_cap_rank: Optional[float]
    price_change_percentage_200d_in_currency: Optional[float]
    price_change_percentage_30d_in_currency: Optional[float]
    price_change_percentage_7d_in_currency: Optional[float]
    market_share: Optional[float]

    class Config:
        orm_mode = True


# Additional information that can be sent per post request when creating a new index
class CoinEntryForIndex(CoinBase):
    proportion_invested: Optional[float]
    personal_index_market_share: Optional[float]

    class Config:
        orm_mode = True


class Index(BaseModel):
    user_id: int
    index_name: Optional[str]
    total_investment: Optional[float]
    list_of_coins: List[CoinEntryForIndex]

    class Config:
        orm_mode = True


class History(BaseModel):
    list_of_indizes: List[Index]

    class Config:
        orm_mode = True


class User(BaseModel):
    email: str

    class Config:
        orm_mode = True


# Properties to receive via API on creation
class UserCreate(User):
    password: str


# Additional properties to return via API
class UserOut(User):
    user_id: int
    created_at: datetime

    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str
    token_type: str
