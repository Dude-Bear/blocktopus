from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP

from app.db.base_class import Base


class Coin(Base):
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
