'use client';

import React, { useState } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: string[]; // Array of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  // Check for empty images array inside the render, but don't return early before using useState
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div>No images available</div>; // Fallback content
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={prevSlide}>
        &#10094;
      </button>

      <div className={styles.carouselImageWrapper}>
        <img
          src={images[currentIndex]} // Ensure there is always an image in the array
          alt="carousel image"
          className={styles.carouselImage}
        />
      </div>

      <button className={styles.next} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
