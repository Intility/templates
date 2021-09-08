from fastapi import APIRouter
{% if cookiecutter.sqlmodel == 'True' %}
from app.api.api_v1.endpoints import cars, views
{% else %}
from app.api.api_v1.endpoints import views
{% endif %}


api_router = APIRouter(tags=['my_views'])
api_router.include_router(views.router)
{% if cookiecutter.sqlmodel == 'True' %}
car_api_router = APIRouter(tags=['cars'])
car_api_router.include_router(cars.router)
{% endif %}

