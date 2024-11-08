import React from 'react'
import "../static/ImageContainer.css"

function ImageContainer() {
  return (
    <div className="image-container">
    <div className="image-wrapper">
      <img src="src/assets/ManModel.png" alt="manModelPicture" />
      <div className="overlay"></div>
    </div>
    <div className="image-wrapper">
      <img src="src/assets/WomanModel.png" alt="womanModelPicture" />
      <div className="overlay"></div>
    </div>
    <div className="image-wrapper">
      <img src="src/assets/UnisexModel.png" alt="unisexModelPicture" />
      <div className="overlay"></div>
    </div>
  </div>
  )
}

export default ImageContainer