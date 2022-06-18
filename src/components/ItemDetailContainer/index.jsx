import { useState, useEffect } from 'react'
import { products } from '../../utils/products'
import { customFetch } from '../../utils/customFetch'
import { Loader } from '../Loader'
import { ItemDetail } from '../ItemDetail'

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState(undefined)

    useEffect(() => {
        customFetch(products)
            .then(res => {
                setListProduct(res.find(item => item.id === 1))
            })
    }, [listProduct])

    return(
        <>
            {listProduct ? <ItemDetail name={listProduct.product} id={listProduct.id} stock={listProduct.stock} initial={listProduct.initial} description={listProduct.description} config={listProduct.config} price={listProduct.price} img={listProduct.image} /> : <Loader />}
        </>
    )
}

export { ItemDetailContainer }