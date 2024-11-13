import React from 'react'
import '../static/Filter.css'

function Filter() {
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

                        <div className="slider"></div>
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

            <div className="filter-product-container"></div>
        </div>
    </>
  )
}

export default Filter