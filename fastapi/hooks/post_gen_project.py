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
    remove(os.path.join(os.getcwd(), 'migrations'))
    remove(os.path.join(os.getcwd(), 'alembic.ini'))
    remove(os.path.join(os.getcwd(), 'app', 'api', 'endpoints', 'cars.py'))
    remove(os.path.join(os.getcwd(), 'tests', 'models'))
    remove(os.path.join(os.getcwd(), 'tests', 'api', 'test_cars_api.py'))
