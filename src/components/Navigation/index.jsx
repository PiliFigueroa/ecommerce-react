import { Link, HStack, Box, Spacer } from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import { Link as Redirect } from "react-router-dom"
import { CartWidget } from '../CartWidget'

const Navigation = () => {
    return(
        <HStack boxShadow='lg' bg='white' px="20px">
            <Redirect to="/" >
                <img src={logo} ald="Logo" width="80px" />
            </Redirect>
            <Spacer />
            <HStack spacing="10px">  
                <Redirect to="category/libros" >      
                    <Link as="span" mx="8px">Libros</Link>
                </Redirect>
                <Redirect to="category/dados" >
                    <Link as="span" mx="8px">Dados</Link>
                </Redirect>
                <Redirect to="category/figuras" >
                    <Link as="span" mx="8px">Figuras</Link>
                </Redirect>
                <CartWidget />
            </HStack>   
        </HStack>
    )
}

export { Navigation }