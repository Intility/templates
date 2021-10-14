import logging

from aioredis import from_url
from fastapi import FastAPI, Security
from fastapi.middleware.cors import CORSMiddleware
from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend
from sentry_sdk import init as sentry_init
from sentry_sdk.integrations.asgi import SentryAsgiMiddleware
{% if cookiecutter.sqlmodel == 'True' %}
from app.api.api_v1.api import api_router, car_api_router
{% else %}
from app.api.api_v1.api import api_router
{% endif %}

from app.api.security import azure_scheme
from app.core.config import settings

log = logging.getLogger(__name__)

app = FastAPI(
    openapi_url=f'{settings.API_V1_STR}/openapi.json',
    swagger_ui_oauth2_redirect_url='/oauth2-redirect',
    swagger_ui_init_oauth={
        'usePkceWithAuthorizationCodeGrant': True,
        'clientId': settings.OPENAPI_CLIENT_ID,
    },
    version='1.0.0',
    description='## Welcome to my API! \n This is my description, written in `markdown`',
    title=settings.PROJECT_NAME,
)

if settings.ENVIRONMENT in ['lab', 'qa', 'prod']:
    sentry_init(
        dsn=f'https://{settings.SENTRY_TOKEN}@sentry.intility.no/{settings.SENTRY_PROJECT}',
        environment=settings.ENVIRONMENT,
    )
    app.add_middleware(SentryAsgiMiddleware)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
    allow_origin_regex=settings.BACKEND_CORS_ORIGINS_REGEX,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.on_event('startup')
async def load_config() -> None:
    """
    Load OpenID config on startup.
    """
    await azure_scheme.openid_config.load_config()


@app.on_event('startup')
async def startup_redis_and_cache() -> None:
    """
    Startup function, initiating the FastAPICache.
    """
    redis = from_url(settings.REDIS_CONNECTION_STRING, encoding='utf8')
    FastAPICache.init(RedisBackend(redis), prefix='fastapi-cache')


app.include_router(
    api_router,
    prefix=settings.API_V1_STR,
    dependencies=[Security(azure_scheme, scopes=['user_impersonation'])],
)
{% if cookiecutter.sqlmodel == 'True' %}
app.include_router(car_api_router, prefix=settings.API_V1_STR, dependencies=[])  # No auth required for this route
{% endif %}