from sqlalchemy.ext.asyncio import create_async_engine

from app.core.config import settings

engine = create_async_engine(settings.POSTGRES_CONNECTION_STRING, echo=False)  # echo can be True/False or 'debug'
