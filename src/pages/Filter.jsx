import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import '../static/Filter.css';
import FilterSlider from '../components/FilterSlider';

const Filter = ({ isFilterbarActive, toggleFilterbar }) => {

  return (
    <>

      <div className="content-container">
      {isFilterbarActive && (
        <div className={`filter-sidebar ${isFilterbarActive ? "active" : ""}`}>
          

          <button onClick={toggleFilterbar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </button>

          <div className="filter-sidebar-styling">
            <FilterSlider></FilterSlider>
          </div>

            
          </div>
      )}



        <div className="filter-container">
         <FilterSlider></FilterSlider>
        </div>

        <div className="filter-product-container">
          <div className="products-wrapper">
            {/* Full-Width Header Image */}
            <div className="Advertisement">
              <img
                src="src/advertisements/Advertisement1.jpg" // Replace with your image URL
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
  );
}

export default Filter;
