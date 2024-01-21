import { Card, Stack, Image, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";



export default function Banner() {
    let navigate = useNavigate()
    function routeChange () {
        let path = `/fornecedores`;
        navigate(path)
    }
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                align='center'
                boxSize="100px"
                src='/img/energia_limpa.jpg'
                alt='Energia Limpa'
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>Fornecedores em todo país</Heading>

                    <Text py='2'>
                        Descubra um fornecedor de energia limpa que melhor te atenda
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button
                        onClick={routeChange}
                        variant='solid'
                        size ='sm'
                        colorScheme='teal'>
                        Descobrir
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}