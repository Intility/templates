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


mypy: bool = '{{ cookiecutter.mypy }}' == 'True'
sqlmodel: bool = '{{ cookiecutter.sqlmodel }}' == 'True'

if not mypy:
    remove(os.path.join(os.getcwd(), 'mypy.ini'))

if not sqlmodel:
    # remove absolute path to file nested inside the generated folder
    # Top-level files for SQLModel
    remove(os.path.join(os.getcwd(), 'migrations'))
    remove(os.path.join(os.getcwd(), 'alembic.ini'))

    # App files for SQLModel
    remove(os.path.join(os.getcwd(), 'app', 'api', 'api_v1', 'endpoints', 'cars.py'))
    remove(os.path.join(os.getcwd(), 'app', 'core', 'db.py'))
    remove(os.path.join(os.getcwd(), 'app', 'models'))

    # Test files for SQLModel
    remove(os.path.join(os.getcwd(), 'tests', 'models'))
    remove(os.path.join(os.getcwd(), 'tests', 'api', 'test_cars_api.py'))


print('\n\n**A folder named `{{ cookiecutter.project_name }}` has been successfully created.**')
