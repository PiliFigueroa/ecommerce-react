import { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { HStack, Button } from '@chakra-ui/react'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    return(
        <HStack>
            <Button variant='ghost' colorScheme='red' size='sm' onClick={decrease}>-</Button>
            <p>{count}</p>
            <Button variant='ghost' colorScheme='red' size='sm' onClick={increase}>+</Button>
            <Button colorScheme='red' size='sm' leftIcon={<FaShoppingCart />}>Agregar al carrito</Button>
        </HStack>
    )
}

export { ItemCount }