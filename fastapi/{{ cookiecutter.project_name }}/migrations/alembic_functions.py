from pathlib import Path

from alembic import command
from alembic.config import Config

ROOT_DIR = Path(__file__).resolve().parent.parent


def upgrade_head() -> None:
    """
    Upgrade the DB of the current environment to the latest migration
    """
    alembic_cfg = Config(str(Path(ROOT_DIR, 'alembic.ini')))
    alembic_cfg.set_main_option('script_location', str(Path(ROOT_DIR, 'migrations')))
    command.upgrade(alembic_cfg, 'head')


def downgrade_base() -> None:
    """
    Downgrade the DB of the current environment to the base/init migration
    """
    alembic_cfg = Config(str(Path(ROOT_DIR, 'alembic.ini')))
    alembic_cfg.set_main_option('script_location', str(Path(ROOT_DIR, 'migrations')))
    command.downgrade(alembic_cfg, 'base')
