import React, { Fragment } from 'react';
import BusinessData from '../../../assets/data/business.js';
import '@brainhubeu/react-carousel/lib/style.css';
import '../../../assets/styles/components/business/cards.scss';

const BusinessCard = React.lazy(() => import('./BusinessCard'));

export default function BusinessSlider() {
  const renderContent = () => {
    return (
      <div className="business-cards-wrapper">
        {BusinessData.map((slide) => (
          <BusinessCard key={slide.id} slide={slide} />
        ))}
      </div>
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
}
