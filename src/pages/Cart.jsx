import React from 'react'
import "../static/Cart.css"

function Cart() {
  return (
    <>
    <div className="cart-container">
        <div className="item-container">
            <div className="title">
                <h1>Shopping Cart</h1>
            </div>

            <div className="items">
                <div className="item">
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d3c001cc561407d/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="productimage" />
                    <div className="item-details">
                        <h2>Product Name</h2>
                        <p className="description">Product description goes here. Briefly describe the product.</p>
                        <div className="quantity-control">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <p className="price">$100.00</p>
                    </div>
                </div>

                <div className="item">
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d76003029feec33/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="productimage" />
                    <div className="item-details">
                        <h2>Product Name</h2>
                        <p className="description">Product description goes here. Briefly describe the product.</p>
                        <div className="quantity-control">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <p className="price">$100.00</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="subtotal">
            <h3>Subtotal (2 items): $200.00</h3>
            <button>Proceed to Checkout</button>
        </div>
    </div>
    </>
  )
}

export default Cart