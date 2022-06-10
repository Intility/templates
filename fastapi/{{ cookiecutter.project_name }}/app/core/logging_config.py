from logging.config import dictConfig

from app.core.config import settings

LOGGING: dict = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        # custom filters, made from `snok/asgi-correlation-id`
        'correlation_id': {
            '()': 'asgi_correlation_id.CorrelationIdFilter',
            'uuid_length': 8 if settings.ENVIRONMENT == 'dev' else 32,  # Make it a bit shorter in dev
        },
    },
    'formatters': {
        # configures the different formats we want to format the log message
        'console': {
            'format': '%(levelname)-8s  [%(correlation_id)s] %(name)s:%(lineno)d    %(message)s',
        },
        'json': {
            '()': 'pythonjsonlogger.jsonlogger.JsonFormatter',
            'format': """
                asctime: %(asctime)s
                created: %(created)f
                filename: %(filename)s
                funcName: %(funcName)s
                levelname: %(levelname)s
                level: %(levelname)s
                levelno: %(levelno)s
                lineno: %(lineno)d
                message: %(message)s
                module: %(module)s
                msec: %(msecs)d
                name: %(name)s
                pathname: %(pathname)s
                process: %(process)d
                processName: %(processName)s
                relativeCreated: %(relativeCreated)d
                thread: %(thread)d
                threadName: %(threadName)s
                exc_info: %(exc_info)s
                correlation_id: %(correlation_id)s
            """,
            'datefmt': '%Y-%m-%d %H:%M:%S',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',  # logging is sent to stdout
            'filters': ['correlation_id'],  # add the custom filter
            'formatter': 'console',  # format log messages with the console formatter
        },
        'json': {
            'class': 'logging.StreamHandler',
            'filters': ['correlation_id'],
            'formatter': 'json',
        },
    },
    'loggers': {
        # project logger
        '{{cookiecutter.project_name}}': {'level': 'INFO', 'propagate': True},
        # third-party packages
        'asgi_correlation_id': {'level': 'WARNING'},
    },
    'root': {
        # use JSON loggers in anything but dev and test, in order to make OpenShift logging work better.
        'handlers': ['console'] if settings.ENVIRONMENT in ['dev', 'test'] else ['json'],
        'level': 'DEBUG' if settings.ENVIRONMENT in ['dev', 'test'] else 'INFO',
    },
}


def setup_logging() -> None:
    """
    Call this function to setup logging for the app.
    """
    dictConfig(LOGGING)
