import React, { useEffect, useState } from "react";
import { Stack,Input, InputGroup } from "@chakra-ui/react";


const SupplierContext = React.createContext({
supplier: [], fetchSupplier: () => {}
})


export default function Home() {
    const [item, setItem] = React.useState("")
    const [supplier, setSupplier] = useState([])

    const fetchSupplier = async() => {
        const response = await fetch("http://localhost:8000/suppliers")
        const supplier = await response.json()
        setSupplier(supplier.data)
    }

    const handleInput = event  => {
        setItem(event.target.value)
      }

    useEffect(() => {fetchSupplier()}, [])
    
    const handleSubmit = async (event) => {
        const newTodo = {
            "item": item
        }
        
        const response = await fetch("http://localhost:8000/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTodo)
        })
        const supplier_list = await response.json()
        debugger
    }
    
    return (
    <SupplierContext.Provider value={{supplier, fetchSupplier}}>
      <form onSubmit={handleSubmit}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Por favor digite seu consumo de energia."
            aria-label="Por favor digite seu consumo de energia."
            onChange={handleInput}
          />
        </InputGroup>
      </form>
      </SupplierContext.Provider>
    );
  };
