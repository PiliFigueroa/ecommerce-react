import React, { useState } from 'react';
import { HStack, Button } from '@chakra-ui/react'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    return(
        <HStack>
            <Button colorScheme='teal' size='sm' onClick={decrease}>-</Button>
            <p>{count}</p>
            <Button colorScheme='teal' size='sm' onClick={increase}>+</Button>
            <Button>Agregar al carrito</Button>
        </HStack>
    )
}

export { ItemCount }