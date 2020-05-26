import React, { useState, Fragment } from 'react';
import { Carousel } from 'react-bootstrap';
import ApproachData from '../../../assets/data/approach.js';
import Arrow from '../../../assets/images/about/arrow.png';
import '../../../assets/styles/components/approach/slider.scss';
const CustomCarousel = React.lazy(() =>
  import('../../shared/CustomCarousel.jsx')
);
const ApproachSlide = React.lazy(() => import('./ApproachSlide'));

export default function ApproachSlider() {
  const [activeSlideId, setActiveSlideId] = useState(0);

  const goToNextSlide = () => {
    if (activeSlideId === Object.keys(ApproachData).length - 1)
      setActiveSlideId(0);
    else setActiveSlideId((activeSlideId) => activeSlideId + 1);
  };

  const renderContent = () => {
    return (
      <div className="approach-slider-wrapper">
        <CustomCarousel
          activeSlideId={activeSlideId}
          setActiveSlideId={setActiveSlideId}
        >
          {Object.keys(ApproachData).map((slideNumber) => (
            <Carousel.Item key={slideNumber}>
              <ApproachSlide innerSlides={ApproachData[slideNumber]} />
            </Carousel.Item>
          ))}
        </CustomCarousel>
        <img
          id="arrow"
          src={Arrow}
          alt="arrow"
          onClick={goToNextSlide}
          className={`approach-slide-wrapper__arrow ${
            activeSlideId === Object.keys(ApproachData).length - 1
              ? 'approach-slide-wrapper__arrow--left-dir'
              : 'approach-slide-wrapper__arrow--right-dir'
          }`}
        />
      </div>
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
}
