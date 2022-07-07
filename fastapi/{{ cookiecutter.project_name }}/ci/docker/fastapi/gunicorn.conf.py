import os

from app.core.logging_config import LOGGING

bind = '0.0.0.0:8000'
keepalive = 5
max_requests = 1000
max_request_jitter = 100
worker_class = 'uvicorn.workers.UvicornWorker'
worker_tmp_dir = '/dev/shm'
workers = len(os.sched_getaffinity(0))  # type: ignore
logconfig_dict = LOGGING
