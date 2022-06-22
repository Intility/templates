#!/bin/bash

{% if cookiecutter.sqlmodel == 'True' %}
# -- Perform database migrations
echo "Running migrations"
alembic upgrade head
{% endif %}

echo "Starting web server"
exec gunicorn app.main:app --config ci/docker/fastapi/gunicorn.conf.py
