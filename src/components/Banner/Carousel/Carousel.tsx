// components/Carousel.tsx

'use client'; // Make this a client-side component for React hooks

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // For optimized images
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import styles from './Carousel.module.css'; // Import custom CSS

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Initialize the Bootstrap carousel if JS is needed
    const carouselElement = document.getElementById('carouselExampleCaptions');
    const carousel = new window.bootstrap.Carousel(carouselElement);
  }, []);

  const carouselItems = [
    {
      src: '/images/slide1.jpg',
      alt: 'First slide',
      title: 'First slide label',
      description: 'Some representative placeholder content for the first slide.',
    },
    {
      src: '/images/slide2.jpg',
      alt: 'Second slide',
      title: 'Second slide label',
      description: 'Some representative placeholder content for the second slide.',
    },
    {
      src: '/images/slide3.jpg',
      alt: 'Third slide',
      title: 'Third slide label',
      description: 'Some representative placeholder content for the third slide.',
    },
  ];

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="carouselExampleCaptions" className={`carousel slide ${styles.carouselWrapper}`}>
      <div className="carousel-indicators">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={activeIndex === index ? 'active' : ''}
            aria-current={activeIndex === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              className="d-block w-100"
              width={1200}
              height={500}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        onClick={() => handleSlideChange(activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        onClick={() => handleSlideChange(activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
