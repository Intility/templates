FROM python:3.10-slim
ENV PYTHONUNBUFFERED 1

WORKDIR /app/dnac-watcher

RUN pip install poetry

COPY pyproject.toml .
COPY poetry.lock .

RUN poetry export -o requirements.txt

RUN pip install --no-deps -r requirements.txt

COPY . .