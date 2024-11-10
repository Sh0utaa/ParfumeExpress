import React, { useState } from 'react';
import "../static/ImageContainer.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

function ImageContainer() {
  const images = [
    "src/assets/ManModel.png",
    "src/assets/WomanModel.png",
    "src/assets/UnisexModel.png"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="image-container">
        {images.map((image, index) => (
          <div className="image-wrapper" key={index}>
            <img src={image} alt={`modelPicture${index}`} />
          </div>
        ))}
      </div>

      <div className="carousel-container">
        <button className="carousel-button left" onClick={handlePrev}>
          <BsArrowLeftCircleFill />
        </button>
        <div className="carousel">
          <div className="slide">
            <img src={images[currentIndex]} alt={`modelPicture${currentIndex}`} />
          </div>
        </div>
        <button className="carousel-button right" onClick={handleNext}>
          <BsArrowRightCircleFill />
        </button>
      </div>
    </>
  );
}

export default ImageContainer;
