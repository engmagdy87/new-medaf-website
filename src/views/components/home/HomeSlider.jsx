import React, { useState } from 'react';
import HomeData from '../../../assets/data/home.js';
import '@brainhubeu/react-carousel/lib/style.css';
import '../../../assets/styles/components/home/slider.scss';
import CustomCarousel from '../../shared/CustomCarousel.jsx';
import { Carousel } from 'react-bootstrap';
const HomeSlide = React.lazy(() => import('./HomeSlide'));

export default function HomeSlider() {
  const [activeSlideId, setActiveSlideId] = useState(0);

  return (
    <div className="home-slider-wrapper">
      <CustomCarousel
        activeSlideId={activeSlideId}
        setActiveSlideId={setActiveSlideId}
      >
        {HomeData.map((slide) => (
          <Carousel.Item key={slide.id}>
            <HomeSlide content={slide} />
          </Carousel.Item>
        ))}
      </CustomCarousel>
    </div>
  );
}
