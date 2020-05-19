import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

export default function CustomCarousel({
  children,
  activeSlideId,
  setActiveSlideId,
  isAutoPlayEnabled = 5000,
  showIndicators = true,
}) {
  return (
    <Fragment>
      <Carousel
        controls={false}
        activeIndex={activeSlideId}
        onSelect={setActiveSlideId}
        indicators={showIndicators}
        interval={isAutoPlayEnabled}
      >
        {children}
      </Carousel>
    </Fragment>
  );
}
