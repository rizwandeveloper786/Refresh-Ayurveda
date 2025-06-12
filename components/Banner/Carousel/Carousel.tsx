'use client';

import React, { useState } from 'react';
import styles from './Carousel.module.css';
import Image from 'next/image'; // Import Image from next/image

interface CarouselProps {
  images: string[]; // Array of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  // React hook ko top level par call karein
  const [currentIndex, setCurrentIndex] = useState(0);

  // Agar images empty hain to fallback message dikhana
  if (!images || images.length === 0) {
    return <div>No images available</div>; 
  }

  // Agla slide dikhane ke liye
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Pichla slide dikhane ke liye
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={prevSlide}>
        &#10094; {/* Left arrow */}
      </button>

      <div className={styles.carouselImageWrapper}>
        <Image
          src={images[currentIndex]} // Image path
          alt="carousel image"
          layout="intrinsic" // You can also use "responsive" or "fill" based on the layout
          width={600} // Image width
          height={400} // Image height
          className={styles.carouselImage}
        />
      </div>

      <button className={styles.next} onClick={nextSlide}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Carousel;
