import React from 'react'
import '../static/Product.css'

function Product() {
  return (
    <div className="product-page">
            <div className="product-container">
                <div className="product-image">
                    <img 
                        src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d420031447fa12e/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" 
                        alt="Product" 
                        className="product-img"
                    />
                </div>
                <div className="product-details">
                    <h1 className="product-name">Product Name</h1>
                    <p className="product-description">
                        This is a description of the product. It provides details about the features, usage, and benefits.
                    </p>
                    <p className="product-price">$99.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
  )
}

export default Product