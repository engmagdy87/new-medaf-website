import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';
import isDeviceSmart from '../../helpers/DetectIsDeviceSmart';

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
        interval={isDeviceSmart() ? null : isAutoPlayEnabled}
      >
        {children}
      </Carousel>
    </Fragment>
  );
}
