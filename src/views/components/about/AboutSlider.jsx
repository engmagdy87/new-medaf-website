import React, { useState, Fragment } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import AboutSlide from './AboutSlide';
import AboutData from '../../../assets/data/about.js';
import '@brainhubeu/react-carousel/lib/style.css';
import '../../../assets/styles/components/about/slider.scss';

export default function AboutSlider() {
  const [activeSlideId, setActiveSlideId] = useState(0);
  const thumbnails = new Array(AboutData.length).fill(
    <div
      style={{ width: '30px', height: '2px', backgroundColor: 'white' }}
    ></div>
  );

  const goToNextSlide = () => {
    if (activeSlideId === AboutData.length - 1) setActiveSlideId(0);
    else setActiveSlideId((activeSlideId) => activeSlideId + 1);
  };

  const renderContent = () => {
    return (
      <div className="about-slider-wrapper">
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
          {AboutData.map((slide) => (
            <AboutSlide
              key={slide.id}
              content={slide}
              goToNextSlide={goToNextSlide}
            />
          ))}
        </Carousel>
        <Dots
          thumbnails={thumbnails}
          value={activeSlideId}
          onChange={setActiveSlideId}
          number={AboutData.length}
        />
      </div>
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
}
