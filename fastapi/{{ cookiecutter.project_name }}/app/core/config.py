from typing import Literal

from pydantic import AnyHttpUrl, BaseSettings, Field


class CustomBaseSettings(BaseSettings):
    """Configure .env settings for all our setting-classes"""

    class Config:
        env_file = '.env'
        env_file_encoding = 'utf-8'
        case_sensitive = True


class Env(CustomBaseSettings):
    ENVIRONMENT: Literal['dev', 'lab', 'prod', 'qa', 'test'] = Field(..., env='ENVIRONMENT')


env = Env()


class RedisCredentials(CustomBaseSettings):
    REDIS_PASSWORD: str = Field('', env='REDIS_PASSWORD')
    TEST_REDIS_HOST: str = Field('localhost:6380', env='TEST_REDIS_HOST')


redis = RedisCredentials()

{% if cookiecutter.sqlmodel == 'True' %}
class PostgresCredentials(CustomBaseSettings):
    POSTGRES_USER: str = Field('{{ cookiecutter.project_name }}', env='POSTGRES_USER')
    POSTGRES_PASSWORD: str = Field('', env='POSTGRES_PASSWORD')
    POSTGRES_HOST: str = Field('localhost', env='POSTGRES_HOST')


postgres = PostgresCredentials()
{% endif %}

class Credentials(CustomBaseSettings):
    REDIS_URL = (
        redis.TEST_REDIS_HOST
        if env.ENVIRONMENT == 'test'
        else 'localhost'
        if env.ENVIRONMENT in ['dev', 'test']
        else f'redis.my_proj-{env.ENVIRONMENT}.svc'
    )
    REDIS_CONNECTION_STRING: str = f'redis://:{redis.REDIS_PASSWORD}@{REDIS_URL}'
    {% if cookiecutter.sqlmodel == 'True' %}
    POSTGRES_USERNAME: str = '{{ cookiecutter.project_name }}'
    POSTGRES_CONNECTION_STRING: str = Field(
        f'postgresql+asyncpg://{postgres.POSTGRES_USER}:{postgres.POSTGRES_PASSWORD}@{postgres.POSTGRES_HOST}',
    )
    {% endif %}


class Authentication(CustomBaseSettings):
    TENANT_ID: str = Field(default='9b5ff18e-53c0-45a2-8bc2-9c0c8f60b2c6', description='Intility tenant ID')
    APP_CLIENT_ID: str = Field(..., description='ClientID for web-app. (First step)')
    OPENAPI_CLIENT_ID: str = Field(..., description='OpenAPI/Swagger SPA client ID')


authentication = Authentication()


class Authorization(CustomBaseSettings):
    SCOPES: dict[str, str] = Field(
        {
            f'api://{authentication.APP_CLIENT_ID}/user_impersonation': 'User impersonation',
        },
        description=(
            'A dictionary with scopes, used for OpenAPI authentication/authorization. '
            'You can add multiple scopes here.'
        ),
    )


class Settings(
    Env,
    RedisCredentials,
    {% if cookiecutter.sqlmodel == 'True' %}PostgresCredentials,{% endif %}
    Credentials,
    Authentication,
    Authorization,
):
    API_V1_STR: str = '/api/v1'
    PROJECT_NAME: str = '{{ cookiecutter.project_name }}'
    SECRET_KEY: str = Field(..., env='SECRET_KEY')
    SENTRY_DSN: str = Field(..., env='SENTRY_DSN')

    # CORS settings should answer this question: Which frontends (through browser) are allowed to access the API?
    # This includes your OpenAPI documentation, your react frontend etc.
    BACKEND_CORS_ORIGINS: list[AnyHttpUrl] = ['http://localhost:8000']
    BACKEND_CORS_ORIGINS_REGEX: str = r'https://.*\.intility\.[no|com]'


settings = Settings()
