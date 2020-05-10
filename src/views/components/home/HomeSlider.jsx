import React, { useState, useEffect } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import HomeSlide from './HomeSlide';
import HomeData from '../../../assets/data/home.js';
import '@brainhubeu/react-carousel/lib/style.css';
import '../../../assets/styles/components/home/slider.scss';

export default function HomeSlider() {
  const [activeSlideId, setActiveSlideId] = useState(0);
  const [isCarouselRendered, setIsCarouselRendered] = useState(false);
  const thumbnails = new Array(HomeData.length).fill(
    <div
      style={{ width: '40px', height: '2px', backgroundColor: 'white' }}
    ></div>
  );
  const slides = HomeData.map((slide) => (
    <HomeSlide key={slide.id} content={slide} />
  ));

  useEffect(() => {
    setTimeout(() => {
      setIsCarouselRendered(true);
    }, 1);
  }, []);

  const renderCarousel = () => {
    if (isCarouselRendered)
      return (
        <Carousel
          value={activeSlideId}
          onChange={setActiveSlideId}
          infinite
          autoPlay={4000}
          animationSpeed={1000}
          arrows={false}
          clickToChange
          centered
        >
          {slides}
        </Carousel>
      );
  };

  return (
    <div className="home-slider-wrapper">
      {renderCarousel()}
      <Dots
        thumbnails={thumbnails}
        value={activeSlideId}
        onChange={setActiveSlideId}
        number={HomeData.length}
      />
    </div>
  );
}
