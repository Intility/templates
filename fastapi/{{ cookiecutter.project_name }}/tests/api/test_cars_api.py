import pytest
from httpx import AsyncClient


async def test_cars_get_empty(client: AsyncClient):
    response = await client.get('api/v1/cars')
    assert response.json() == []


async def test_post_data(client: AsyncClient):
    car = {'name': 'v60', 'manufacturer': 'volvo'}
    response = await client.post('/api/v1/cars', json=car)
    assert response.json() == {'id': 1, **car}
    response = await client.post('/api/v1/cars', json=car)
    assert response.json() == {'id': 2, **car}


async def test_cars_get_non_empty(client: AsyncClient):
    response = await client.get('api/v1/cars')
    car = {'name': 'v60', 'manufacturer': 'volvo'}
    assert response.json() == [{'id': 1, **car}, {'id': 2, **car}]
