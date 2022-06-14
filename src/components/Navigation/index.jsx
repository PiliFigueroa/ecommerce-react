import { Link, HStack, Box, Spacer } from '@chakra-ui/react'
import logo from '../../assets/logo.png'

const Navigation = () => {
    return(
        <HStack>
            <img src={logo} ald="Logo" width="80px" />
            <Spacer />
            <Box>        
                <Link mx="8px">Libros</Link>
                <Link mx="8px">Dados</Link>
                <Link mx="8px">Figuras</Link>
            </Box>   
        </HStack>
    )
}

export { Navigation }