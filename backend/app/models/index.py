from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.sql.expression import text

from app.db.base_class import Base


class Index(Base):
    index_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(
        Integer, ForeignKey("models.user.id", ondelete="CASCADE"), nullable=False
    )
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )
    index_name = Column(String(256), nullable=True)
