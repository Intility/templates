{% if cookiecutter.sqlmodel == 'True' %}
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import sessionmaker

from app.core.db import engine


async def get_session() -> AsyncSession:
    """
    Yield a session to the database
    """
    async_session = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)
    async with async_session() as session:
        yield session
{% endif %}