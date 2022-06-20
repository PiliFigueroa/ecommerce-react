import { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { HStack, Button, Text } from '@chakra-ui/react'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)
    const handleAddToCart = () => onAdd(count)

    return(
        <HStack>
            <Button variant='ghost' colorScheme='red' size='sm' onClick={decrease}>-</Button>
            <Text>{count}</Text>
            <Button variant='ghost' colorScheme='red' size='sm' onClick={increase}>+</Button>
            <Button colorScheme='red' size='sm' leftIcon={<FaShoppingCart />} onClick={handleAddToCart}>Agregar al carrito</Button>
        </HStack>
    )
}

export { ItemCount }