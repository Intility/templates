from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import get_session
from app.models.cars import Car, CarCreate, CarRead

router = APIRouter()


@router.get('/cars', response_model=list[CarRead])
async def get_cars(session: AsyncSession = Depends(get_session)) -> list[Car]:
    """
    List all cars in the database
    """
    result = await session.execute(select(Car))
    return [Car(name=car.name, manufacturer=car.manufacturer, id=car.id) for car in result.scalars().all()]


@router.post('/cars', response_model=CarRead)
async def add_car(car: CarCreate, session: AsyncSession = Depends(get_session)) -> Car:
    """
    Add a car to the database
    """
    car = Car(name=car.name, manufacturer=car.manufacturer)
    session.add(car)
    await session.commit()
    await session.refresh(car)
    return car
