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
  exec gunicorn app.main:app --worker-class uvicorn.workers.UvicornWorker --config ci/docker/fastapi/gunicorn.conf.py
}
{% if cookiecutter.sqlmodel == 'True' %}
run_migrations
{% endif %}
run_web_server
