{% if cookiecutter.authentication_strategy == 'FastAPI Azure Auth (default)' %}from fastapi_azure_auth.user import User{% endif %}
from pydantic import BaseModel, Field


class HelloWorldResponse(BaseModel):
    hello: str = Field(..., description="What we're saying hello to")

{% if cookiecutter.authentication_strategy == 'FastAPI Azure Auth (default)' %}
class HelloUserResponse(HelloWorldResponse):
    user: User = Field(..., description='The user object')
{% endif %}