from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP

from .db.database import Base


class Coin(Base):
    __tablename__ = "coins"
    coin_id = Column(Integer, primary_key=True, nullable=False)
    symbol = Column(String(256), index=True, nullable=True)
    name = Column(String(256), index=True, nullable=True)
    image = Column(String(256), index=True, nullable=True)
    last_updated = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )
    circulating_supply = Column(Integer, nullable=False)
    market_cap = Column(Integer, nullable=False)
    current_price = Column(Integer, nullable=False)


class Consists_Of(Base):
    __tablename__ = "consists_of"
    user_id = Column(
        Integer,
        ForeignKey("models.coin.coin_id", ondelete="CASCADE"),
        primary_key=True,
    )
    index_id = Column(
        Integer,
        ForeignKey("models.index.index_id", ondelete="CASCADE"),
        primary_key=True,
    )

    amount_of_coin = Column(Integer, nullable=False)


class Index(Base):
    __tablename__ = "indices"
    index_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(
        Integer, ForeignKey("models.user.id", ondelete="CASCADE"), nullable=False
    )
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )
    index_name = Column(String(256), nullable=True)


class User(Base):
    __tablename__ = "users"
    user_id = Column(Integer, primary_key=True, nullable=False)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )
