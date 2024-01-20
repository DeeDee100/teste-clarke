from fastapi import APIRouter, Depends, HTTPException, Response, status
from sqlalchemy.orm.session import Session
from sqlalchemy.exc import IntegrityError
from app.database.database import get_db
from app.database.models import Supplier
from app import schemas


router = APIRouter(tags=["Fornecedores"])

mock_supply = {
  "id": "1",
  "name": "Dee",
  "logo": "backend/app/img/lightning-power.jpg",
  "price_kwh": "1.3",
  "min_kwh": "10",
  "total_clients": "2",
  "total_feedback": "0",
  "num_feedback": "0",
  "is_active": "true",
  "created_on": "1705754951",
  "updated_on": ""
}


@router.get("/")
def home_company(db: Session=Depends(get_db)):
    suppliers = db.query(Supplier).all()
    return {"message": suppliers}

@router.get("/{id}")
def get_supplier_by_id(id: str, db: Session=Depends(get_db)):
    supplier = db.query(Supplier).filter(Supplier.id==id).first()
    if not supplier:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Fornecedor não encontrado."
        )
    return {"supplier": supplier}

@router.post("/")
def create_supplier(supplier: schemas.SupplierEntry, db: Session=Depends(get_db)):
    new_supplier = Supplier(**supplier.model_dump())
    db.add(new_supplier)
    try:
        db.commit()
        db.refresh(new_supplier)
        return {"data": supplier.model_dump()}
    except IntegrityError as err:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT, detail={"message": err.args}
        )

