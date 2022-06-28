from sqlalchemy import Column, Integer, ForeignKey


from app.db.base_class import Base


class Consists_Of(Base):
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
