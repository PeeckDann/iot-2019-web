from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
fish_list = []


class Fish(BaseModel):
    id: Optional[str]
    name: str
    description: str
    price: int


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/fish')
def post(fish: Fish):
    temp_id = 1
    while str(temp_id) in map(lambda i: i.id, fish_list):
        temp_id += 1
    fish.id = str(temp_id)
    fish_list.append(fish)
    print(fish_list)


@app.get('/fish')
def get():
    return fish_list


@app.put('/fish/{id}')
def put(id, fish: Fish):
    for i in range(len(fish_list)):
        if fish_list[i].id == id:
            fish_list[i] = fish
            return


@app.delete('/fish/{id}')
def delete(id):
    for i in range(len(fish_list)):
        if fish_list[i].id == id:
            return fish_list.pop(i)
