import React, { useEffect } from 'react';
import Carousel from '@brainhubeu/react-carousel';

export default function CustomCarousel({
  children,
  activeSlideId,
  setActiveSlideId,
}) {
  useEffect(() => {
    // carousel at first render not appear till resize window, so I added this fake resize action to show carousel
    // issue was opened on @brainhubeu/react-carousel github repo about this behavior
    // issue url 👉 https://github.com/brainhubeu/react-carousel/issues/475
    window.dispatchEvent(new Event('resize'));
  }, []);
  return (
    <Carousel
      value={activeSlideId}
      onChange={setActiveSlideId}
      // infinite
      // autoPlay={4000}
      // animationSpeed={1000}
      arrows={false}
      clickToChange
      centered
    >
      {children}
    </Carousel>
  );
}
