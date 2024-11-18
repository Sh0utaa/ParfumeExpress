import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "../static/FilterSlider.css"

const MIN = 100;
const MAX = 12000;


const FilterSlider = () => {
  const [values, setValues] = useState([MIN, MAX]);

  const handleSliderChange = (event, newValue) => {
    setValues(newValue);
  };


  return (
    <>
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
              sx={{
                color: '#333', // Blackish gray color
                '& .MuiSlider-thumb': {
                  backgroundColor: '#444', // Thumb (circle) color
                },
                '& .MuiSlider-track': {
                  backgroundColor: '#333', // Filled track color
                },
                '& .MuiSlider-rail': {
                  backgroundColor: '#888', // Unfilled track color
                },
              }}
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
    </>
  )
}

export default FilterSlider