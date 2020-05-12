import React, { useState, Fragment } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import ApproachData from '../../../assets/data/approach.js';
import Arrow from '../../../assets/images/about/arrow.png';
import '@brainhubeu/react-carousel/lib/style.css';
import '../../../assets/styles/components/approach/slider.scss';
const ApproachSlide = React.lazy(() => import('./ApproachSlide'));

export default function ApproachSlider() {
  const [activeSlideId, setActiveSlideId] = useState(0);
  const thumbnails = new Array(Object.keys(ApproachData).length).fill(
    <div
      style={{ width: '30px', height: '2px', backgroundColor: 'white' }}
    ></div>
  );

  const goToNextSlide = () => {
    if (activeSlideId === Object.keys(ApproachData).length - 1)
      setActiveSlideId(0);
    else setActiveSlideId((activeSlideId) => activeSlideId + 1);
  };

  const renderContent = () => {
    return (
      <div className="approach-slider-wrapper">
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
          {Object.keys(ApproachData).map((slideNumber) => (
            <ApproachSlide
              key={slideNumber}
              slideNumber={slideNumber}
              innerSlides={ApproachData[slideNumber]}
            />
          ))}
        </Carousel>
        <Dots
          thumbnails={thumbnails}
          value={activeSlideId}
          onChange={setActiveSlideId}
          number={Object.keys(ApproachData).length}
        />
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
