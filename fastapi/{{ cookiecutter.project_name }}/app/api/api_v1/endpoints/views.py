import random

from fastapi import APIRouter, Depends, Request
from fastapi_azure_auth.user import User
from fastapi_cache.decorator import cache

from app.api.security import validate_is_admin_user
from app.schemas.hello_world import HelloWorldResponse

router = APIRouter()


@cache(expire=5)
async def something_random() -> str:
    """
    Example of a cached function. This can also be applied to views.
    """
    return random.choice(['earth', 'mars', 'universe'])


@router.get(
    '/hello',
    response_model=HelloWorldResponse,
    response_model_exclude={'access_token'},
    summary='Say hello',
    name='hello_world',
    operation_id='helloWorld',
)
async def any_user(request: Request) -> dict:
    """
    Any authenticated user can use this view.
    If you execute this, it will have
    """
    user: User = request.state.user
    five_second_cached_response = await something_random()  # This is a cached function
    return {'hello': five_second_cached_response, 'user': user}


@router.get(
    '/hello-admin',
    response_model=HelloWorldResponse,
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
