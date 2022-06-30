from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.api_v1.coins import coins_router
from app.api.api_v1.index import index_router

from sqlalchemy.orm import Session

from . import models
from .db.database import engine, SessionLocal

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


origins = [
    "http://localhost:3000",
    "https://blocktopus-crypto-index.herokuapp.com/*",
    "https://blocktopus-crypto-index.herokuapp.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World from the backend!"}


@app.get("/sqlalchemy")
async def test_posts(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    return {"users": users}


app.include_router(coins_router, prefix="/api/coins", tags=["coins"])
app.include_router(index_router, prefix="/api/index", tags=["index"])
