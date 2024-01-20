from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import models
from .database.database import engine
from .routes import fornecedor

app = FastAPI(
    title="Clarke",
    version="0.1",
)

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

models.Base.metadata.create_all(bind=engine)

@app.get("/", tags=["root"])
def root():
    return {"message": "Welcome to the Clarke Energy API. Please check docs to see usage examples"}

app.include_router(fornecedor.router, prefix="/suppliers")