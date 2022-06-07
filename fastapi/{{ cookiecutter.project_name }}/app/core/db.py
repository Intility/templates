from sqlalchemy.ext.asyncio import create_async_engine

from app.core.config import settings

ASYNC_ENGINE = create_async_engine(
    f'{settings.POSTGRES_CONNECTION_STRING}',
    echo=False,  # echo can be True/False or 'debug'
)
