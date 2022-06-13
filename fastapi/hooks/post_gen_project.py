import os
import shutil


def remove(filepath: str) -> None:
    """
    Removes a file/directory.
    """
    if os.path.isfile(filepath):
        os.remove(filepath)
    elif os.path.isdir(filepath):
        shutil.rmtree(filepath)


sqlmodel: bool = '{{ cookiecutter.sqlmodel }}' == 'True'
auth: bool = '{{cookiecutter.authentication_strategy }}' == 'FastAPI Azure Auth (default)'
include_apis: bool = '{{cookiecutter.include_example_apis }}' == 'True'

if not include_apis:
    remove(os.path.join(os.getcwd(), 'app', 'api', 'api_v1', 'endpoints', 'views.py'))
    remove(os.path.join(os.getcwd(), 'app', 'models'))  # Used for API
    remove(os.path.join(os.getcwd(), 'app', 'schemas', 'hello_world.py'))  # Used for API

    # API related tests
    remove(os.path.join(os.getcwd(), 'tests', 'api', 'test_api.py'))
    remove(os.path.join(os.getcwd(), 'tests', 'models'))
    remove(os.path.join(os.getcwd(), 'tests', 'api', 'test_cars_api.py'))
    # We do not delete tests/api/conftest.py


if not auth:
    remove(os.path.join(os.getcwd(), 'app', 'api', 'security.py'))


if not sqlmodel:
    # remove absolute path to file nested inside the generated folder
    # Top-level files for SQLModel
    remove(os.path.join(os.getcwd(), 'migrations'))
    remove(os.path.join(os.getcwd(), 'alembic.ini'))

    # App files for SQLModel
    remove(os.path.join(os.getcwd(), 'app', 'core', 'db.py'))
    remove(os.path.join(os.getcwd(), 'app', 'models'))

    # Test files for SQLModel
    remove(os.path.join(os.getcwd(), 'tests', 'models'))
    remove(os.path.join(os.getcwd(), 'tests', 'api', 'test_cars_api.py'))

    # Remove docker-compose, it is no longer used
    remove(os.path.join(os.getcwd(), 'docker-compose.yaml'))


print('\n\n**A folder named `{{ cookiecutter.project_name }}` has been successfully created.**')
