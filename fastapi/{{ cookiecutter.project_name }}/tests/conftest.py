{% if cookiecutter.sqlmodel == 'True' %}import asyncio
import pytest
from migrations.alembic_functions import downgrade_base, upgrade_head
from sqlalchemy.ext.asyncio import AsyncConnection
from sqlmodel.ext.asyncio.session import AsyncSession

from app.core.db import ASYNC_ENGINE


@pytest.fixture
async def connection() -> AsyncConnection:
    """
    Connect to the database, yield connection.
    When we're done with our connection, rollback whatever changes we made.
    """
    async with ASYNC_ENGINE.begin() as conn:
        yield conn
        await conn.rollback()


@pytest.fixture
async def session(connection: AsyncConnection):
    """
    Create a database session.
    """
    async with AsyncSession(connection, expire_on_commit=False) as _session:
        yield _session


@pytest.fixture(scope='module', autouse=True)
def init_test_db():
    """
    Initiates the db and adds a a car to the database.
    Tears down the db afterwards.

    This is run once per module. This means `api` tests has one database, and `models` database has one database.
    """
    downgrade_base()  # in case the last test session didn't exit properly
    upgrade_head()
    yield
    # What happens after yield happens after the tests in this scope is run.
    downgrade_base()


@pytest.fixture(scope='session', autouse=True)
def event_loop():
    """
    Among other things, avoids problems related to sharing a connection pool for sqlalchemy db over different asyncio
    pools (which pytest uses by default)
    Reference: https://github.com/pytest-dev/pytest-asyncio/issues/38#issuecomment-264418154
    https://github.com/Kludex/basesqlmodel/blob/d3ee96bf24095f60dd06b8e57b19a86c7b8717c9/tests/conftest.py#L26
    """
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()
{% endif %}
{% if cookiecutter.sqlmodel == 'False' %}import asyncio

import pytest


@pytest.fixture(scope='session', autouse=True)
def event_loop():
    """
    Among other things, avoids problems related to sharing a connection pool for sqlalchemy db over different asyncio
    pools (which pytest uses by default)
    Reference: https://github.com/pytest-dev/pytest-asyncio/issues/38#issuecomment-264418154
    https://github.com/Kludex/basesqlmodel/blob/d3ee96bf24095f60dd06b8e57b19a86c7b8717c9/tests/conftest.py#L26
    """
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()
{% endif %}