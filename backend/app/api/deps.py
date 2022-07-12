from typing import Generator, Optional

from fastapi import Depends, HTTPException, status
from jose import jwt, JWTError
from pydantic import BaseModel
from sqlalchemy.orm.session import Session

from app.core.auth import oauth2_scheme
from app.core.config import settings
from app.db.database import SessionLocal
from app.models import User


class TokenData(BaseModel):
    user_id: Optional[int] = None


def get_db() -> Generator:
    db = SessionLocal()
    db.current_user_id = None
    try:
        yield db
    finally:
        db.close()


async def get_current_user(
    db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)
) -> User:

    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(
            token,
            settings.secret_key,
            algorithms=[settings.algorithm],
            options={"verify_aud": False},
        )

        print(payload)
        user_id: str = payload.get("user_id")
        if user_id is None:
            print("user_id none")
            raise credentials_exception
        token_data = TokenData(user_id=user_id)
    except JWTError:
        raise credentials_exception

    user = db.query(User).filter(User.user_id == token_data.user_id).first()
    if user is None:
        raise credentials_exception
    return user
