import React, { useState, useEffect } from 'react';
import "../static/ImageContainer.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

function ImageContainer() {
  const images = [
    "https://cloud.appwrite.io/v1/storage/buckets/673c8c9c000adf57ba37/files/673c900a0037e5bd2b47/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/673c8c9c000adf57ba37/files/673c90140024d309eda4/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin",
    "https://cloud.appwrite.io/v1/storage/buckets/673c8c9c000adf57ba37/files/673c901a00084e40e803/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <>
      {/* Regular Image Container for larger screens */}
      <div className="image-container">
        {images.map((image, index) => (
          <div className="image-wrapper" key={index}>
            <img src={image} alt={`modelPicture${index}`} />
          </div>
        ))}
      </div>

      {/* Carousel Container for smaller screens */}
      <div className="carousel-container">
        <button className="carousel-button left" onClick={handlePrev}>
          <BsArrowLeftCircleFill />
        </button>
        <div className="carousel">
          <div 
            className="slide-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div className="slide" key={index}>
                <img src={image} alt={`modelPicture${index}`} />
              </div>
            ))}
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
