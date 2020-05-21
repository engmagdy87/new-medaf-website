import React, { useState, Fragment } from 'react';
import NewsData from '../../../assets/data/news.js';
import '../../../assets/styles/components/news/cards.scss';
import '../../../assets/styles/components/news/card.scss';
import { Carousel } from 'react-bootstrap';
const CustomCarousel = React.lazy(() =>
  import('../../shared/CustomCarousel.jsx')
);
const NewsCard = React.lazy(() => import('./NewsCard'));

export default function GroupSlider() {
  const [activeSlideId, setActiveSlideId] = useState(0);

  const renderSlides = (card, index) => (
    <Carousel.Item key={index}>
      <NewsCard card={card} />
    </Carousel.Item>
  );
  const renderContent = () => {
    return (
      <div className="news-cards-wrapper-mobile">
        <CustomCarousel
          activeSlideId={activeSlideId}
          setActiveSlideId={setActiveSlideId}
        >
          {NewsData.map(renderSlides)}
        </CustomCarousel>
      </div>
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
}
