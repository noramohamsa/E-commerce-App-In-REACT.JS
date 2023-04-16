import React, { useState, useEffect } from 'react'

import Product from './Product'
function ProductsList() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getAllProducts()
        getAllCategories()
    }, [])
    const getAllProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }
    const getAllCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((response) => response.json())
            .then((data) => setCategories(data))
    }
    const getProductsInCategory = (catName) => {
        fetch(`https://fakestoreapi.com/products/category/${catName}`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }
    const allProducts = () => {
        getAllProducts()
    }
    return (
        <>
            <h1 className='text-center p-3'>Products List</h1>
            <div className='container'>

                <button className='btn btn-info m-3'
                    onClick={() => allProducts()}>AllProducts</button>

                {categories.map((cat) => (
                    <button className='btn btn-info m-3' key={cat}
                        onClick={() => getProductsInCategory(cat)}>{cat}</button>
                ))}
                <div className='row'>

                    {products.map((product) => (
                        <div className='col-3 mt-5' key={product.id}>
                            <Product product={product} showButton={true} />
                        </div>
                    ))}



                </div>
            </div>
        </>
    )
}

export default ProductsList
