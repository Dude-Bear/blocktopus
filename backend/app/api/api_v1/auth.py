from typing import Any
from fastapi import APIRouter, Depends, status, HTTPException
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from ...core import auth
from ...core import security
from ...db.database import get_db

from ... import models
from ... import schemas


auth_router = router = APIRouter()


@router.post("/login", response_model=schemas.Token)
def login(
    user_credentials: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
) -> Any:
    """
    Use password and email to login.
    """
    user = (
        db.query(models.User)
        .filter(models.User.email == user_credentials.username)
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials"
        )

    if not security.verify_password(user_credentials.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials"
        )

    access_token = auth.create_access_token(data={"user_id": user.user_id})

    return {"access_token": access_token, "token_type": "bearer"}


@router.post(
    "/signup", response_model=schemas.UserOut, status_code=status.HTTP_201_CREATED
)
def create_user_signup(
    *,
    db: Session = Depends(get_db),
    user_data_in: schemas.User,
) -> Any:
    """
    Create new user without the need to be logged in.
    """

    excisting_user = (
        db.query(models.User).filter(models.User.email == user_data_in.email).first()
    )
    if excisting_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="The user with this email already exists in the system",
        )

    hashed_password = security.get_password_hash(user_data_in.password)
    user_data_in.password = hashed_password

    print(user_data_in)

    new_user = models.User(**user_data_in.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    print(new_user.__dict__)

    return new_user
