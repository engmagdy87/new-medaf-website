import React, { useEffect, Fragment } from 'react';
import Carousel from '@brainhubeu/react-carousel';

export default function CustomCarousel({
  children,
  activeSlideId,
  setActiveSlideId,
  isAutoPlayEnabled = true,
}) {
  useEffect(() => {
    // carousel at first render not appear till resize window, so I added this fake resize action to show carousel
    // issue was opened on @brainhubeu/react-carousel github repo about this behavior
    // issue url 👉 https://github.com/brainhubeu/react-carousel/issues/475
    window.dispatchEvent(new Event('resize'));
  }, []);
  const renderCarousel = () => {
    if (isAutoPlayEnabled)
      return (
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
          {children}
        </Carousel>
      );
    return (
      <Carousel
        value={activeSlideId}
        onChange={setActiveSlideId}
        arrows={false}
        clickToChange
        centered
      >
        {children}
      </Carousel>
    );
  };
  return <Fragment>{renderCarousel()}</Fragment>;
}
