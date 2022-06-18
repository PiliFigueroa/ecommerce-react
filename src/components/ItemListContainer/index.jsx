import { useState, useEffect } from 'react'
import { products } from '../../utils/products'
import { customFetch } from '../../utils/customFetch'
import { Loader } from '../Loader'
import { ItemList } from '../ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                if (category) {
                    setLoading(false)
                    setListProducts(res.filter(prod => prod.category === category))
                } else {
                    setLoading(false)
                    setListProducts(res)
                }
            })
    }, [category])

    return(
        <div>
            {!loading
            ? 
            <ItemList products={listProducts} />
            :
            <Loader />}
        </div>
    )
}

export { ItemListContainer }