import pytest
from aioredis import from_url
from aioresponses import aioresponses
from fastapi_azure_auth import SingleTenantAzureAuthorizationCodeBearer
from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend
from httpx import AsyncClient
from tests.api.auth_utils import build_openid_keys

from app.api.security import azure_scheme
from app.core.config import settings
from app.main import app as fastapi_app


@pytest.fixture(scope='session', autouse=True)
def init_cache():
    """
    Inits the cache to the redis_test container
    """
    redis = from_url(settings.REDIS_CONNECTION_STRING, encoding='utf8')
    FastAPICache.init(RedisBackend(redis), prefix='fastapi-cache')


@pytest.fixture(scope='module', autouse=True)
def mock_openid():
    """
    Whenever the FastAPI app tries to fetch the openid configuration, it will be intercepted and this is returned
    instead. This sets up the rest of the authentication to do as we please.
    """
    with aioresponses() as mock:
        # Mock openid config
        mock.get(
            'https://login.microsoftonline.com/intility_tenant/v2.0/.well-known/openid-configuration',
            payload={
                'token_endpoint': 'https://login.microsoftonline.com/intility_tenant/oauth2/v2.0/token',
                'jwks_uri': 'https://login.microsoftonline.com/intility_tenant/discovery/v2.0/keys',
                'response_modes_supported': ['query', 'fragment', 'form_post'],
                'scopes_supported': ['openid', 'profile', 'email', 'offline_access'],
                'issuer': 'https://login.microsoftonline.com/intility_tenant/v2.0',
                'authorization_endpoint': 'https://login.microsoftonline.com/intility_tenant/oauth2/v2.0/authorize',
                'end_session_endpoint': 'https://login.microsoftonline.com/intility_tenant/oauth2/v2.0/logout',
            },
        )
        # Mock jwks_uri-endpoint response
        keys = build_openid_keys()
        mock.get('https://login.microsoftonline.com/intility_tenant/discovery/v2.0/keys', payload=keys)
        yield mock


@pytest.fixture(scope='module')
async def client():
    azure_scheme_overrides = SingleTenantAzureAuthorizationCodeBearer(
        app_client_id=settings.APP_CLIENT_ID,
        scopes={
            f'api://{settings.APP_CLIENT_ID}/user_impersonation': 'User impersonation',
        },
        tenant_id=settings.TENANT_ID,
        token_version=2,
    )
    fastapi_app.dependency_overrides[azure_scheme] = azure_scheme_overrides
    async with AsyncClient(app=fastapi_app, base_url='http://test') as ac:
        yield ac
