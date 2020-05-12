import React, { useState, Fragment } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import AboutData from '../../../assets/data/about.js';
import Arrow from '../../../assets/images/about/arrow.png';
import '../../../assets/styles/components/about/slider.scss';
const AboutSlide = React.lazy(() => import('./AboutSlide'));

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
            <AboutSlide key={slide.id} content={slide} />
          ))}
        </Carousel>
        <Dots
          thumbnails={thumbnails}
          value={activeSlideId}
          onChange={setActiveSlideId}
          number={AboutData.length}
        />
        <img
          src={Arrow}
          alt="arrow"
          onClick={goToNextSlide}
          className="about-slider-wrapper__arrow"
        />
      </div>
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
}
