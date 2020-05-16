import React, { useState, Fragment } from 'react';
import TeamData from '../../../assets/data/team.js';
import Arrow from '../../../assets/images/about/arrow.png';
import '@brainhubeu/react-carousel/lib/style.css';
import '../../../assets/styles/components/team/slider.scss';
const CustomCarousel = React.lazy(() =>
  import('../../shared/CustomCarousel.jsx')
);
const TeamSlide = React.lazy(() => import('./TeamSlide'));

export default function TeamSlider() {
  const [activeSlideId, setActiveSlideId] = useState(0);

  const goToNextSlide = () => {
    if (activeSlideId === Object.keys(TeamData).length - 1) setActiveSlideId(0);
    else setActiveSlideId((activeSlideId) => activeSlideId + 1);
  };

  const renderContent = () => {
    return (
      <div className="team-slider-wrapper">
        <CustomCarousel
          activeSlideId={activeSlideId}
          setActiveSlideId={setActiveSlideId}
        >
          {Object.keys(TeamData).map((slideNumber) => (
            <TeamSlide
              key={slideNumber}
              slideNumber={slideNumber}
              innerSlides={TeamData[slideNumber]}
            />
          ))}
        </CustomCarousel>
        <img
          id="arrow"
          src={Arrow}
          alt="arrow"
          onClick={goToNextSlide}
          className={`team-slide-wrapper__arrow ${
            activeSlideId === Object.keys(TeamData).length - 1
              ? 'team-slide-wrapper__arrow--left-dir'
              : 'team-slide-wrapper__arrow--right-dir'
          }`}
        />
      </div>
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
}
