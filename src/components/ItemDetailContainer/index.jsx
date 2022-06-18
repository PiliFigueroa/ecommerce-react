import { useState, useEffect } from 'react'
import { products } from '../../utils/products'
import { customFetch } from '../../utils/customFetch'
import { Loader } from '../Loader'
import { ItemDetail } from '../ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState(undefined)
    const { id } = useParams()

    useEffect(() => {
        customFetch(products)
            .then(res => {
                setListProduct(res.find(item => item.id === parseInt(id)))
            })
    }, [listProduct])

    return(
        <>
            {listProduct ? <ItemDetail name={listProduct.product} id={listProduct.id} stock={listProduct.stock} initial={listProduct.initial} description={listProduct.description} config={listProduct.config} price={listProduct.price} img={listProduct.image} /> : <Loader />}
        </>
    )
}

export { ItemDetailContainer }