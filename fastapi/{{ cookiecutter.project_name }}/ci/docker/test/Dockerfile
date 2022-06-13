ARG BASE_IMAGE
FROM $BASE_IMAGE

RUN poetry export --dev -o requirements.txt

RUN pip install --no-deps -r requirements.txt
