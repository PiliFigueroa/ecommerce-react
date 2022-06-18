import { useState, useEffect } from 'react'
import { products } from '../../utils/products'
import { customFetch } from '../../utils/customFetch'
import { Loader } from '../Loader'
import { ItemList } from '../ItemList'

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        customFetch(products)
            .then(res => setListProducts(res))
    }, [listProducts])

    return(
        <div>
            {listProducts.length > 0 
            ? 
            <ItemList products={listProducts} />
            :
            <Loader />}
        </div>
    )
}

export { ItemListContainer }