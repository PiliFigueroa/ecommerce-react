import { Center } from '@chakra-ui/react'
import { Item } from '../Item'

const ItemList = ({ products }) => {
    
    return(
        <Center display="flex" flexWrap="wrap">
            {products.map(product => <Item key={product.id} id={product.id} config={product.config} img={product.image} initial={product.initial} price={product.price} name={product.product} stock={product.stock} />)}
        </Center>
    )
}

export { ItemList }