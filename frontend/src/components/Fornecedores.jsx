import React, { useState } from "react";
import { Stack, Box, Alert, AlertIcon, AlertTitle, useDisclosure , CloseButton, Input  } from "@chakra-ui/react";
import { Card, Image, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'



const SupplierContext = React.createContext({
supplier: [], fetchSupplier: () => {}
})


export default function Teste() {
    const [item, setItem] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [supplier_list, setSupplierList] = useState([]);
    const [isMousedOver, setMouseOver] = useState(false);
    const [isError, setError] = useState(false);
    
    
    function handleMouseOver() {
      setMouseOver(!isMousedOver);
    }

    const handleInput = event  => {
      setError(false);
      setItem(event.target.value)
    }
    
    const handleSubmit =  async (event) => {
        event.preventDefault()
        if (item.length === 0) {
            setError(true);
            setShowResults(false)
            return
        }
        const energy = {
            "energy": item
        }
        const response = await fetch("http://localhost:8000/suppliers/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(energy)
        })
        const lista = await response.json()
        // debugger
        setSupplierList(lista.data)
        setShowResults(true)
    }

    function Child(props) {
        return(        
        <div style={{display:"flex", flexDirection:"column",flexWrap:"wrap", alignContent:"center"}}>
        <h2>Fornecedores com capacidade de atende-lo:</h2>
        {props.supply.map((supplier) => (
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                size='sm'
                variant='filled'
                justifyContent='space-around'
                maxW='lg'
                m={3}
                
            >
        <Box m={5}  display='flex'>
                <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        // src={supplier.logo}
                        src="https://img.freepik.com/fotos-gratis/paineis-solares-3d-e-moinho-de-vento_23-2148907391.jpg?w=740&t=st=1705775186~exp=1705775786~hmac=0e5e8723d1e7b5d0aea12bfc43b7e74ca5993af99daa00b9bab9c004eeeb95b0"
                        alt='Logo' 
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <CardBody>
                                <Heading size='md'>{supplier.name}</Heading>

                                <Text py='2' >
                                    Preço do kwH R${supplier.price_kwh}
                                </Text>
                            </CardBody>

                            <CardFooter>
                                <Button variant='solid' colorScheme='blue'>
                                    Escolher esse fornecedor
                                </Button>
                            </CardFooter>
                        </Stack>
        </Box>
        </Card>
        ))}
        </div>
        )
        
    }

    function Alerta(){
        const {
            isOpen: isVisible,
            onClose,
          } = useDisclosure({ defaultIsOpen: true })
        
        return isVisible ? (
            <div >
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Por favor envie um valor válido</AlertTitle>
                <CloseButton
                    alignSelf='flex-start'
                    position='relative'
                    right={-1}
                    top={-1}
                    onClick={onClose}
                />
            </Alert>
            </div>
        ) : null
    }
    
    return (
        <div
          style={{margin:"0 0 0 0"}}
        >
            <img src="/img/bg-energia.jpg" alt="" 
            style={{opacity:"0.4", position:"absolute", height:"auto", width:"auto"}}
        />
        {isError ? <Alerta /> : null}

        <div className="container"
        style={{ position:"relative"}}
        >  
        <form onSubmit={handleSubmit}>
        <input
        style={{color: "black", backgroundColor:"lightgrey"}}
          onChange={handleInput}
          type="text"
          placeholder="Consumo de energia em kWh"
          value={item}
        />
        <button
          style={{ backgroundColor: isMousedOver ? "lightgray" : "white" }}
          type="submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOver}
        >
          Submit
        </button>
      </form>


        {showResults ? <Child supply={supplier_list} /> : null}
      </div>
      </div>
    );
  };