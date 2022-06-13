{% if cookiecutter.authentication_strategy == 'FastAPI Azure Auth (default)' %}from fastapi import Request
from fastapi_azure_auth.user import User

from app.api.security import validate_is_admin_user, azure_scheme
{% endif %}

from app.schemas.hello_world import HelloWorldResponse{% if cookiecutter.authentication_strategy == 'FastAPI Azure Auth (default)' %}, HelloUserResponse{% endif %}
from fastapi import APIRouter, Depends
{% if cookiecutter.sqlmodel == 'True' %}
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.api.dependencies import yield_session
from app.models.cars import Car, CarCreate, CarRead
{% endif %}


router = APIRouter()


@router.get(
    '/hello',
    response_model=HelloWorldResponse,
    summary='Say hello',
    name='hello_world',
    operation_id='helloWorld',
)
async def world() -> dict:
    """
    Example API
    """
    return {'hello': 'world'}


{% if cookiecutter.authentication_strategy == 'FastAPI Azure Auth (default)' %}
@router.get(
    '/hello-user',
    response_model=HelloUserResponse,
    response_model_exclude={'access_token'},
    summary='Say hello',
    name='hello_user',
    operation_id='helloUser',
    dependencies=[Depends(azure_scheme)]
)
async def any_user(request: Request) -> dict:
    """
    Any authenticated user can use this view.
    """
    user: User = request.state.user
    return {'hello': 'world', 'user': user}


@router.get(
    '/hello-admin',
    response_model=HelloUserResponse,
    response_model_exclude={'access_token'},
    summary='Admin view',
    name='hello_admin',
    operation_id='helloAdmin',
    dependencies=[Depends(validate_is_admin_user)],
)
async def admin_user(request: Request) -> dict:
    """
    Only users in the `AdminUser` role can access this view.
    """
    user: User = request.state.user
    return {'hello': 'admin user', 'user': user}
{% endif %}

{% if cookiecutter.sqlmodel == 'True' %}
@router.get('/cars', response_model=list[CarRead])
async def get_cars(session: AsyncSession = Depends(yield_session)) -> list[Car]:
    """
    List all cars in the database
    """
    result = await session.execute(select(Car))
    return [Car(name=car.name, manufacturer=car.manufacturer, id=car.id) for car in result.scalars().all()]


@router.post('/cars', response_model=CarRead)
async def add_car(car: CarCreate, session: AsyncSession = Depends(yield_session)) -> Car:
    """
    Add a car to the database
    """
    car = Car(name=car.name, manufacturer=car.manufacturer)
    session.add(car)
    await session.commit()
    await session.refresh(car)
    return car
{% endif %}