import logging

from fastapi import Depends
from fastapi_azure_auth import SingleTenantAzureAuthorizationCodeBearer
from fastapi_azure_auth.exceptions import InvalidAuth
from fastapi_azure_auth.user import User

from app.core.config import settings

log = logging.getLogger(__name__)


azure_scheme = SingleTenantAzureAuthorizationCodeBearer(
    app_client_id=settings.APP_CLIENT_ID,
    scopes=settings.SCOPES,
    tenant_id=settings.TENANT_ID,
)


async def validate_is_admin_user(user: User = Depends(azure_scheme)) -> None:
    """
    Validate that a user is in the `AdminUser` role in order to access the API.
    Raises a 401 authentication error if not.
    """
    if 'AdminUser' not in user.roles:
        raise InvalidAuth('User is not an AdminUser')
