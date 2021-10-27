FROM python:3.9-slim

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PYTHONPATH=/app

# Install curl
RUN apt-get update && apt-get install --no-install-recommends -y \
    # Needed for Poetry installation
    curl

# Install Poetry
RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/install-poetry.py | POETRY_HOME=/opt/poetry python  \
    && cd /usr/local/bin  \
    && ln -s /opt/poetry/bin/poetry  \
    && poetry config virtualenvs.create false

# Set workdir
WORKDIR /app

# Install dependencies
COPY poetry.lock pyproject.toml ./
RUN pip install --upgrade pip --user
RUN poetry install --no-dev --no-root

# Copy files
COPY ./ci/docker/fastapi/entrypoint.sh /app/entrypoint.sh
COPY ./ci/docker/fastapi/gunicorn.conf.py /app/gunicorn.conf.py
{% if cookiecutter.sqlmodel == 'True' %}
COPY ./alembic.ini /app/alembic.ini
COPY ./migrations/ /app/migrations/
{% endif %}
COPY ./app/ /app/app/


ENTRYPOINT  ["bash", "entrypoint.sh"]
