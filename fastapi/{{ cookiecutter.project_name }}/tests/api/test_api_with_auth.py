import pytest
from httpx import AsyncClient
from tests.api.auth_utils import create_access_token


@pytest.mark.asyncio
async def test_auth_view(client: AsyncClient):
    response = await client.get('api/v1/hello')
    assert response.status_code == 401


@pytest.mark.asyncio
async def test_auth_view(client: AsyncClient):
    response = await client.get('api/v1/hello', headers={'Authorization': f'Bearer {create_access_token()}'})
    assert response.status_code == 200


@pytest.mark.asyncio
async def test_auth_view_not_admin(client: AsyncClient):
    response = await client.get('api/v1/hello-admin', headers={'Authorization': f'Bearer {create_access_token()}'})
    assert response.status_code == 401


@pytest.mark.asyncio
async def test_auth_view_admin(client: AsyncClient):
    response = await client.get(
        'api/v1/hello-admin', headers={'Authorization': f'Bearer {create_access_token(roles=["AdminUser"])}'}
    )
    assert response.status_code == 200
