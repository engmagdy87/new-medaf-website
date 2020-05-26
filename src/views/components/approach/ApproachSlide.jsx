import React from 'react';
import '../../../assets/styles/components/approach/slide.scss';
const ApproachCard = React.lazy(() => import('./ApproachCard'));

export default function ApproachSlide({ innerSlides }) {
  const renderSlides = (slide, index) => (
    <ApproachCard
      key={index}
      card={slide}
      totalCards={innerSlides.data.length}
    />
  );

  return (
    <div className="approach-slide-wrapper">
      <h2 className="approach-slide-wrapper__title">{innerSlides.title}</h2>
      <div className="approach-slide-wrapper__cards">
        {innerSlides.data.map(renderSlides)}
      </div>
    </div>
  );
}
