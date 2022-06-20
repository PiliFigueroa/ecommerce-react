import { Link, HStack, Spacer } from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import { NavLink as Redirect } from "react-router-dom"
import { CartWidget } from '../CartWidget'

const Navigation = () => {

    const config = ['libros', 'dados', 'figuras', 'accesorios']

    return(
        <HStack boxShadow='lg' bg='white' px="20px">
            <Redirect to="/" >
                <img src={logo} ald="Logo" width="50px" />
            </Redirect>
            <Spacer />
            <HStack spacing="10px">  
                {config.map((category, index) => 
                    <Redirect key={`${category}-${index}`} to={`category/${category}`} >      
                        <Link as="span" mx="8px" className='capitalize'>{category}</Link>
                    </Redirect>)
                }
                <Redirect to="favorites" >      
                    <Link as="span" mx="8px" className='capitalize' color="red">Favorites</Link>
                </Redirect>
                <CartWidget />
            </HStack>   
        </HStack>
    )
}

export { Navigation }