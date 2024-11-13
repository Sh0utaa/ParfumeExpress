import React, { useState } from 'react'
import '../static/Filter.css'

function Filter() {

    const [minPrice, setMinPrice] = useState(2500);
    const [maxPrice, setMaxPrice] = useState(7500);

    // Event handler for updating the min value
    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice - 1);
        setMinPrice(value);
    };

    // Event handler for updating the max value
    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice + 1);
        setMaxPrice(value);
    };


  return (
    <>
        <div className="content-container">
            <div className="filter-container">
                <div className="filter-price">
                    <h4>Price Range</h4>
                    <p>use slider or enter min and max price</p>
                    <div className="price-input">
                        <div className="field">
                            <span>Min</span>
                            <input type="number"className='input-min' value="2500" />
                        </div>
                        <div className="seperator">-</div>
                        <div className="field">
                            <span>Max</span>
                            <input type="number"className='input-min' value="7500" />
                        </div>

                    </div>
                    <div className="slider">
                        <div className="progress"></div>
                    </div>

                    <div className="range-input">
                        <input type="range" className="range-min" min="0" max="10000" value="2500" />
                        <input type="range" className="range-max" min="0" max="10000" value="7500" />
                    </div>

                </div>

                <div className="filter-product-category">

                    <div className="filter-gender">
                        <h4>Filter by Gender</h4>
                        <select name="parfume-gender-filter" id="parfume-gender-filter">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Unisex">Unisex</option>
                        </select>
                    </div>

                    <div className="filter-brand">
                        <h4>Filter by Brand</h4>
                        <select name="parfume-brand-filter" id="parfume-brand-filter">
                            <option value="Armani">Armani</option>
                            <option value="Valentino">Valentino</option>
                            <option value="PDM">Parfumes de marly</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="filter-product-container">
                <div className="products-wrapper">
                    {/* Full-Width Header Image */}
                    <div className="Advertisement">
                        <img
                        src="src\advertisements\Advertisement1.jpg" // Replace with your image URL
                        alt="Promotional Banner"
                        />
                    </div>

                    <div className="products">
                        <div className="product">
                            <h4>SPICEBOMB EXTREME</h4>
                            <p>50ml</p>
                            <img
                            src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d76003029feec33/view?project=67179e18003ccf5af8e5"
                            alt="SPICEBOMB EXTREME"
                            />
                            <p>$299.00</p>
                        </div>

                        <div className="product">
                            <h4>SPICEBOMB EXTREME</h4>
                            <p>50ml</p>
                            <img
                            src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d76003029feec33/view?project=67179e18003ccf5af8e5"
                            alt="SPICEBOMB EXTREME"
                            />
                            <p>$299.00</p>
                        </div>

                        <div className="product">
                            <h4>STRONGER WITH YOU</h4>
                            <p>50ml</p>
                            <img
                            src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d420031447fa12e/view?project=67179e18003ccf5af8e5"
                            alt="STRONGER WITH YOU"
                            />
                            <p>$299.00</p>
                        </div>

                        <div className="product">
                            <h4>STRONGER WITH YOU</h4>
                            <p>50ml</p>
                            <img
                            src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d420031447fa12e/view?project=67179e18003ccf5af8e5"
                            alt="STRONGER WITH YOU"
                            />
                            <p>$299.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Filter