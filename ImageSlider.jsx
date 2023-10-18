import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/151',
    'https://via.placeholder.com/152',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div style={{ position: 'relative', height: '400px', width: '100%', overflow: 'hidden' }}>
      <div
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          position: 'absolute',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      ></div>
      <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        {images.map((image, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              cursor: 'pointer',
              padding: '10px',
              color: currentImage === index ? 'red' : 'black',
            }}
          >
            &bull;
          </span>
        ))}
      </div>
      <button style={{ position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)' }} onClick={prevSlide}>
        Previous
      </button>
      <button style={{ position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)' }} onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
