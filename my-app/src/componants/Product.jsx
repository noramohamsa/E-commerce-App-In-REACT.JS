import React from 'react'
import { Link } from 'react-router-dom'
function Product({ product, showButton }) {
  return (
    <div>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p> Price :{product.price}$</p>
          {showButton && <Link className="btn btn-primary" to={`/products/${product.id}`}>Details</Link>}

        </div>
      </div>
    </div>
  )
}

export default Product
