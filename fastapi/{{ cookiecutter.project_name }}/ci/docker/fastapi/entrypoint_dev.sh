#!/bin/bash

{% if cookiecutter.sqlmodel == 'True' %}
# -- Perform database migrations
run_migrations() {
  echo "Running migrations"
  alembic upgrade head
}
{% endif %}

run_web_server() {
  echo "Starting web server"
  exec uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
}

{% if cookiecutter.sqlmodel == 'True' %}
run_migrations
{% endif %}
run_web_server
