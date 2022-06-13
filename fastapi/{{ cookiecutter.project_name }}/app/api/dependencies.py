{% if cookiecutter.sqlmodel == 'True' %}
from sqlmodel.ext.asyncio.session import AsyncSession

from app.core.db import ASYNC_ENGINE


async def get_session() -> AsyncSession:
    """
    Return a session to the database
    """
    return AsyncSession(ASYNC_ENGINE, expire_on_commit=False)


async def yield_session() -> AsyncSession:
    """
    Yield a session to the database
    """
    async with AsyncSession(ASYNC_ENGINE, expire_on_commit=False) as session:
        yield session
{% endif %}