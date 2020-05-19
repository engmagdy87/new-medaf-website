import React, { useState, Fragment } from 'react';
import BusinessData from '../../../assets/data/business.js';
import '../../../assets/styles/components/business/cards.scss';
import '../../../assets/styles/components/business/card.scss';
import { Carousel } from 'react-bootstrap';
const CustomCarousel = React.lazy(() =>
  import('../../shared/CustomCarousel.jsx')
);
const BusinessCard = React.lazy(() => import('./BusinessCard'));

export default function GroupSlider() {
  const [activeSlideId, setActiveSlideId] = useState(0);

  const renderSlides = (slide, index) => (
    <Carousel.Item key={index}>
      <BusinessCard slide={slide} />
    </Carousel.Item>
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
      </div>
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
}
