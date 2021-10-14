import pytest
from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession

from app.models.cars import Car


@pytest.mark.asyncio
async def test_car_model(event_loop, session: AsyncSession) -> None:
    """
    Tests that we can:
      * Establish connection to database (using the session fixture)
      * Check that database is empty
      * Create a new car instance
      * Add it to the session and commit the car to the database
      * Fetch the database again and check that the car is there
    :param session: AsyncSession, we use this to interact with the database
    """
    # Check that there's no cars in the database
    statement = select(Car)
    empty_db_response = await session.execute(statement)
    assert empty_db_response.scalars().all() == []
    # Create a car instance and add it to the database
    car = Car(name='v60', manufacturer='Volvo')
    session.add(car)
    await session.commit()
    await session.refresh(car)
    # Check that there now is a car in the database
    db_response = await session.execute(statement)
    assert db_response.scalars().first() == car
