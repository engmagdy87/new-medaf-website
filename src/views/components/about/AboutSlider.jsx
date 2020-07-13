import React, { Fragment } from 'react';
import AboutData from '../../../assets/data/about.js';
import '../../../assets/styles/components/about/slider.scss';
const AboutFirstSlide = React.lazy(() => import('./AboutFirstSlide'));
const AboutSecondSlide = React.lazy(() => import('./AboutSecondSlide'));

export default function AboutSlider() {
  const renderContent = () => {
    return (
      <div className="about-slider-wrapper">
        <AboutFirstSlide content={AboutData['MEDAF INVESTMENTS']} />
        <AboutSecondSlide
          firstSection={AboutData['OUR VISION']}
          secondSection={AboutData['VALUES']}
        />
      </div>
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
}
