import React, { useState, Fragment } from 'react';
import AboutData from '../../../assets/data/about.js';
import Arrow from '../../../assets/images/about/arrow.png';
import '../../../assets/styles/components/about/slider.scss';
import { Carousel } from 'react-bootstrap';
const AboutSlide = React.lazy(() => import('./AboutSlide'));
const CustomCarousel = React.lazy(() => import('../../shared/CustomCarousel'));

export default function AboutSlider() {
  const [activeSlideId, setActiveSlideId] = useState(0);

  const goToNextSlide = () => {
    if (activeSlideId === AboutData.length - 1) setActiveSlideId(0);
    else setActiveSlideId((activeSlideId) => activeSlideId + 1);
  };

  const renderContent = () => {
    return (
      <div className="about-slider-wrapper">
        <CustomCarousel
          activeSlideId={activeSlideId}
          setActiveSlideId={setActiveSlideId}
        >
          {AboutData.map((slide) => (
            <Carousel.Item key={slide.id}>
              <AboutSlide content={slide} />
            </Carousel.Item>
          ))}
        </CustomCarousel>

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
