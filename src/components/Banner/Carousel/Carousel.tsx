"use client";

import { useState } from "react";
import styles from "./Carousel.module.css";



const Carousel = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        
        {slides.map((slide, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className={styles.prevButton} onClick={handlePrev}>
        ❮
      </button>
      <button className={styles.nextButton} onClick={handleNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
