import React, { useState, Fragment } from 'react';
import { Dots } from '@brainhubeu/react-carousel';
import BusinessData from '../../../assets/data/business.js';
import '@brainhubeu/react-carousel/lib/style.css';
import '../../../assets/styles/components/business/cards.scss';
import '../../../assets/styles/components/business/card.scss';
const CustomCarousel = React.lazy(() =>
  import('../../shared/CustomCarousel.jsx')
);
const BusinessCard = React.lazy(() => import('./BusinessCard'));

export default function GroupSlider() {
  const [activeSlideId, setActiveSlideId] = useState(0);

  const thumbnails = new Array(BusinessData.length).fill(
    <div
      style={{ width: '30px', height: '2px', backgroundColor: 'white' }}
    ></div>
  );
  const renderSlides = (slide, index) => (
    <BusinessCard key={index} slide={slide} />
  );
  const renderContent = () => {
    return (
      <div className="business-cards-wrapper-mobile">
        <CustomCarousel
          activeSlideId={activeSlideId}
          setActiveSlideId={setActiveSlideId}
        >
          {BusinessData.map(renderSlides)}
        </CustomCarousel>
        <Dots
          thumbnails={thumbnails}
          value={activeSlideId}
          onChange={setActiveSlideId}
          number={BusinessData.length}
        />
      </div>
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
}
