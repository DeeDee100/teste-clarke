from sqlalchemy import Boolean, Column, Integer, String, DateTime, Float
from sqlalchemy.sql import func
from .database import Base

class Supplier(Base):
    __tablename__ = "supplier_db"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    logo = Column(String, default="backend/app/img/lightning-power.jpg")
    price_kwh = Column(Float, nullable=False)
    min_kwh = Column(Float, nullable=False)
    total_clients = Column(Integer, default=0)
    total_feedback = Column(Float, nullable=False, default=0)
    num_feedback = Column(Integer, nullable=False, default=0)
    is_active = Column(Boolean, default=True)
    created_on = Column(DateTime(timezone=True), server_default=func.now())
    updated_on = Column(DateTime(timezone=True), server_onupdate=func.now())
