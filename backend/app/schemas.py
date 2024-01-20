from pydantic import BaseModel
from typing import Optional

class SupplierEntry(BaseModel):
    name: str
    logo: Optional[str]
    price_kwh: float
    min_kwh: float