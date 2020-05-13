import React, { useState } from 'react';
import { Dots } from '@brainhubeu/react-carousel';
import HomeData from '../../../assets/data/home.js';
import '@brainhubeu/react-carousel/lib/style.css';
import '../../../assets/styles/components/home/slider.scss';
import CustomCarousel from '../../shared/CustomCarousel.jsx';
const HomeSlide = React.lazy(() => import('./HomeSlide'));

export default function HomeSlider() {
  const [activeSlideId, setActiveSlideId] = useState(0);
  const thumbnails = new Array(HomeData.length).fill(
    <div
      style={{ width: '30px', height: '2px', backgroundColor: 'white' }}
    ></div>
  );

  return (
    <div className="home-slider-wrapper">
      <CustomCarousel
        activeSlideId={activeSlideId}
        setActiveSlideId={setActiveSlideId}
      >
        {HomeData.map((slide) => (
          <HomeSlide key={slide.id} content={slide} />
        ))}
      </CustomCarousel>
      <Dots
        thumbnails={thumbnails}
        value={activeSlideId}
        onChange={setActiveSlideId}
        number={HomeData.length}
      />
    </div>
  );
}
