from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.api_v1.coins import coins_router

app = FastAPI()


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


app.include_router(coins_router, prefix="/api/coins", tags=["coins"])
