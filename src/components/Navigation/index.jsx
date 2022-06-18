import { Link, HStack, Box, Spacer } from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import { Link as Redirect } from "react-router-dom"

const Navigation = () => {
    return(
        <HStack boxShadow='lg' bg='white'>
            <Redirect to="/" >
                <img src={logo} ald="Logo" width="80px" />
            </Redirect>
            <Spacer />
            <Box>  
                <Redirect to="category/libros" >      
                    <Link mx="8px">Libros</Link>
                </Redirect>
                <Redirect to="category/dados" >
                    <Link mx="8px">Dados</Link>
                </Redirect>
                <Redirect to="category/figuras" >
                    <Link mx="8px">Figuras</Link>
                </Redirect>
            </Box>   
        </HStack>
    )
}

export { Navigation }