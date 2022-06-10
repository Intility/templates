# Intility FastAPI Templates

This is the home for Intility FastAPI templates.

## TL;DR
* Depends on [`cruft`](https://github.com/cruft/cruft) (which depends and is built on top of 
  [`cookiecutter`](https://github.com/cookiecutter/cookiecutter))
* [`pre_gen_project.py`](hooks/pre_gen_project.py) runs before cookiecutter is run.
* [`post_gen_project.py`](hooks/post_gen_project.py) runs after cookiecutter is run. This will remove files
based on selections.

## Usage
In order to use the latest _released_ template, please follow the documentation over at
[create.intility.app](https://create.intility.app/fastapi). 

## Editing the template
1. Create a venv from the `fastapi` folder
```bash
poetry update
```
2. Make your changes
3. Use `cookiecutter` to test your local version. 
```bash
cookiecutter fastapi
```
