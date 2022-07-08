import logging

from asgi_correlation_id import CorrelationIdMiddleware
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sentry_sdk import init as sentry_init
from sentry_sdk.integrations.asgi import SentryAsgiMiddleware
from app.api.api_v1.api import api_router
from fastapi_stack_utils.exception_handler import format_and_log_exception_internal, http_exception_handler
from fastapi_stack_utils.middleware import LoggingMiddleware
from starlette.middleware import Middleware
{% if cookiecutter.authentication_strategy == 'FastAPI Azure Auth (default)' %}
from app.api.security import azure_scheme
{% endif %}
from app.core.config import settings
from app.core.logging_config import setup_logging

log = logging.getLogger(__name__)

app = FastAPI(
    openapi_url=f'{settings.API_V1_STR}/openapi.json',
    swagger_ui_oauth2_redirect_url='/oauth2-redirect',
    {% if cookiecutter.authentication_strategy == 'FastAPI Azure Auth (default)' %}swagger_ui_init_oauth={
        'usePkceWithAuthorizationCodeGrant': True,
        'clientId': settings.OPENAPI_CLIENT_ID,
    },{% endif %}
    version='1.0.0',
    description='## Welcome to my API! \n This is my description, written in `markdown`',
    title=settings.PROJECT_NAME,
    on_startup=[setup_logging],
    middleware=[Middleware(CorrelationIdMiddleware, header_name='Correlation-ID'), Middleware(LoggingMiddleware)],
)
{% if cookiecutter.authentication_strategy == 'FastAPI Azure Auth (default)' %}

@app.on_event('startup')
async def load_config() -> None:
    """
    Load OpenID config on startup.
    """
    await azure_scheme.openid_config.load_config()
{% endif %}

if settings.ENVIRONMENT in ['lab', 'qa', 'prod']:
    sentry_init(
        dsn=settings.SENTRY_DSN,
        environment=settings.ENVIRONMENT,
    )
    app.add_middleware(SentryAsgiMiddleware)
{% if cookiecutter.authentication_strategy == 'Kong (no auth included)' %}
if settings.ENVIRONMENT == 'dev':
    app.add_middleware(
        CORSMiddleware,
        allow_credentials=True,
        allow_headers=['*'],
        allow_methods=['*'],
        allow_origins=['*'],
    )
{% else %}
app.add_middleware(
    CORSMiddleware,
    allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
    allow_origin_regex=settings.BACKEND_CORS_ORIGINS_REGEX,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)
{% endif %}


app.add_exception_handler(HTTPException, http_exception_handler)
app.add_exception_handler(Exception, format_and_log_exception_internal)


app.include_router(
    api_router,
    prefix=settings.API_V1_STR,
)