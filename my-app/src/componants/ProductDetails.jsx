import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'

function ProductDetails() {
    const params = useParams()
    console.log(params)
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
            .then((response) => response.json())
            .then((product) => setProduct(product))
    }, [])
    return (
        <div>
            <h1>product details :{params.productId}</h1>
            <Product product={product} showButton={false} />

        </div>
    )
}

export default ProductDetails
