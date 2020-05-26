import React, { useState, Fragment } from 'react';
import { Carousel } from 'react-bootstrap';
import '../../../../assets/styles/components/approach/slider.scss';
import '../../../../assets/styles/components/approach/slide.scss';
const CustomCarousel = React.lazy(() =>
  import('../../../shared/CustomCarousel.jsx')
);
const ApproachCard = React.lazy(() => import('./ApproachCard'));

export default function GroupSlider({ groupData }) {
  const [activeSlideId, setActiveSlideId] = useState(0);

  const renderSlides = (slide, index) => (
    <Carousel.Item key={index}>
      <ApproachCard card={slide} />
    </Carousel.Item>
  );
  const renderContent = () => {
    return (
      <div className="approach-slider-wrapper">
        <CustomCarousel
          activeSlideId={activeSlideId}
          setActiveSlideId={setActiveSlideId}
        >
          {groupData.map(renderSlides)}
        </CustomCarousel>
      </div>
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
}
