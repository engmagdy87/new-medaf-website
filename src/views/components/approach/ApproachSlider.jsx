import React, { useState, Fragment } from 'react';
import ApproachData from '../../../assets/data/approach.js';
import Arrow from '../../../assets/images/about/arrow.png';
import '../../../assets/styles/components/approach/slider.scss';
import CustomCarousel from '../../shared/CustomCarousel.jsx';
import { Carousel } from 'react-bootstrap';
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
              <ApproachSlide
                slideNumber={slideNumber}
                innerSlides={ApproachData[slideNumber]}
              />
            </Carousel.Item>
          ))}
        </CustomCarousel>
        <img
          src={Arrow}
          alt="arrow"
          onClick={goToNextSlide}
          className="approach-slide-wrapper__arrow"
          style={{
            display:
              activeSlideId === Object.keys(ApproachData).length - 1
                ? 'none'
                : 'block',
          }}
        />
      </div>
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
}
