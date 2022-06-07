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


class Credentials(CustomBaseSettings):
    {% if cookiecutter.sqlmodel == 'True' %}
    POSTGRES_USER: str = Field('{{ cookiecutter.project_name }}', env='POSTGRES_USER')
    POSTGRES_PASSWORD: str = Field('', env='POSTGRES_PASSWORD')
    POSTGRES_URL: str = Field('localhost', env='POSTGRES_URL')
    {% endif %}
    {% if cookiecutter.authentication_strategy == 'FastAPI Azure Auth (default)' %}
    TENANT_ID: str = Field(default='9b5ff18e-53c0-45a2-8bc2-9c0c8f60b2c6', description='Intility tenant ID')
    APP_CLIENT_ID: str = Field(..., description='ClientID for web-app. (First step)')
    OPENAPI_CLIENT_ID: str = Field(..., description='OpenAPI/Swagger SPA client ID')
    {% endif %}
    {% if cookiecutter.authentication_strategy != 'FastAPI Azure Auth (default)' and cookiecutter.sqlmodel == 'False' %}
    ...
    {% endif %}


credentials = Credentials()


class SettingsWithDerivedValues(CustomBaseSettings):
    """
    These variables are separately defined here because they need to use the actual value of some fields after the
    Field-class has determined a fields actual value (default or based from an environment variable).
    This doesn't work if defined in the same settings class.
    """
    {% if cookiecutter.sqlmodel == 'True' %}
    POSTGRES_CONNECTION_STRING: str = Field(
        f'postgresql+asyncpg://{credentials.POSTGRES_USER}:{credentials.POSTGRES_PASSWORD}@{credentials.POSTGRES_URL}',
    )
    {% endif %}
    {% if cookiecutter.authentication_strategy == 'FastAPI Azure Auth (default)' %}
    SCOPES: dict[str, str] = Field(
        {
            f'api://{credentials.APP_CLIENT_ID}/user_impersonation': 'User impersonation',
        },
        description=(
            'A dictionary with scopes, used for OpenAPI authentication/authorization. '
            'You can add multiple scopes here.'
        ),
    )
    {% endif %}
    {% if cookiecutter.authentication_strategy != 'FastAPI Azure Auth (default)' and cookiecutter.sqlmodel == 'False' %}
    ...
    {% endif %}


class Settings(
    Env,
    Credentials,
    SettingsWithDerivedValues
):
    API_V1_STR: str = '/api/v1'
    PROJECT_NAME: str = '{{ cookiecutter.project_name }}'
    SECRET_KEY: str = Field(..., env='SECRET_KEY')
    SENTRY_DSN: str = Field('', env='SENTRY_DSN')

    # CORS settings should answer this question: Which frontends (through browser) are allowed to access the API?
    # This includes your OpenAPI documentation, your react frontend etc.
    BACKEND_CORS_ORIGINS: list[AnyHttpUrl] = ['http://localhost:8000']
    BACKEND_CORS_ORIGINS_REGEX: str = r'https://.*\.intility\.(no|com)'


settings = Settings()
