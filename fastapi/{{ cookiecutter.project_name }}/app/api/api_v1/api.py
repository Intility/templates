from fastapi import APIRouter
{% if cookiecutter.include_example_apis == 'True' %}
from app.api.api_v1.endpoints import views

api_router = APIRouter(tags=['my_views'])
api_router.include_router(views.router)
{% else %}
#from app.api.api_v1.endpoints import views

api_router = APIRouter(tags=['my_views'])
#api_router.include_router()
{% endif %}