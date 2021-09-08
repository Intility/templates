"""Example code"""
from sqlmodel import Field, SQLModel


class CarBase(SQLModel):
    """
    CarBase is the base model. This is a data-only model(Pydantic), since it lacks `table=True`.
    """

    name: str
    manufacturer: str


class Car(CarBase, table=True):  # type: ignore
    """
    Add `id` property to the base model. Since `table=True` it is a pydantic AND SQLAlchemy model
    and represents a database table.
    """

    id: int = Field(default=None, primary_key=True)


class CarRead(CarBase):
    id: int  # Make `id` a required field in our response model


class CarCreate(CarBase):
    """
    This is a data-only pydantic model. Used to create new songs.
    """

    pass
