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
<!--
Provide step by step instructions that will allow a new contributor to get a copy of the project up and running on their local machine.
Installation of common development tools such as `git`, `docker` and IDEs can be covered here, but is not necessary.

The granularity and extent of these instructions will depend on the size and type of the project,
but may extend to things such as platform specific steps, etc.
-->
This project is based off the [Create-FastAPI-App template](https://create.intility.app/fastapi). 

### Running the project
<!-- Provide examples of how to run the project locally here, if applicable. -->
<!-- If the project can be run in multiple ways (Docker, Minishift, command line, etc), -->
<!-- it might be appropriate to have a section for each of them-->
1. Populate a `.env` file in the root folder.
2. Run `docker-compose up`
3. Run your application with `poetry run uvicorn app.main:app --host localhost --port 8000 --reload`

## Deployment

<!-- Provide step by step instructions that explain the process of deploying the application in QA or Prod environments -->

<!-- If the project uses a CI/CD pipeline describe the high level concepts of the pipeline strategy here. -->