import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import '../static/Filter.css';

const MIN = 100;
const MAX = 12000;

function Filter() {
  const [values, setValues] = useState([MIN, MAX]);

  const handleSliderChange = (event, newValue) => {
    setValues(newValue);
  };

  return (
    <>
      <div className="content-container">
        <div className="filter-container">
          <div className="filter-price">
            {/* SLIDER */}
            <div className="box">
              <h3>
                Price <span>Range</span>
              </h3>
              <div className={'values'}>
                ${values[0]} - ${values[1]}
              </div>
              <small>Current Range: $100 - $12000</small>

              <Box>
                <Slider
                  value={values}
                  min={MIN}
                  max={MAX}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                />
              </Box>


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
                <option value="PDM">Parfumes de Marly</option>
              </select>
            </div>
          </div>
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
