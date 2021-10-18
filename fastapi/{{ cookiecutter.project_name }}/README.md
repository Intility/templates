# {{ cookiecutter.project_name }}

<!-- Describe the project briefly here. -->
<!-- Also, unless it's clear: specify what type of project it is; API, library, application, collection of scripts, etc -->

## Purpose
<!-- What does the application do and why? What problem does it solve? -->
{{ cookiecutter.description }}

## Intended consumers

<!--  Who is the application intended for, and who can utilize its features? -->

## Main technologies

<!-- What are the main languages and frameworks are used in the project -->
* FastAPI
* Azure AD

## Available at

<!-- If the application is live, mention where it can be 'viewed' and where it is deployed, e.g. OpenShift, Azure etc. -->
<!-- For libraries, this might also include what package repository it's available at -->
<!-- If the project is an API or a library, where can I find documentation for it? -->


## Getting Started

1. Populate a `.env` file in the root folder.
2. Run `docker-compose up`
3. Run your application with `poetry run uvicorn app.main:app --host localhost --port 8000 --reload`
