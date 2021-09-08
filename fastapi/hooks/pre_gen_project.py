import re
import sys

if not re.match(r'^[_a-z]+$', '{{ cookiecutter.project_name }}'):
    print('Invalid characters in project name. Use `_` as a separator and lower case letters')  # noqa
    sys.exit(1)
