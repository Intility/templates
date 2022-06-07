# Intility FastAPI Templates

This is the home for Intility FastAPI templates.

## TL;DR
* Depends on [`cruft`](https://github.com/cruft/cruft) (which depends and is built on top of 
  [`cookiecutter`](https://github.com/cookiecutter/cookiecutter))
* [`pre_gen_project.py`](hooks/pre_gen_project.py) runs before cookiecutter is run.
* [`post_gen_project.py`](hooks/post_gen_project.py) runs after cookiecutter is run. This will remove files
based on selections.
  * Multiple files are completely deleted based on user selections!


## Usage
* `poetry init` from `templates` folder.
* `poetry add cruft`
* `cruft create . --directory="fastapi"` to use from source (current commit)
  * `cookiecutter fastapi` to use from current state (used while testing uncommitted changes)
* `cruft create https://github.com/Intility/templates.git --directory="fastapi"` to use from GitHub
