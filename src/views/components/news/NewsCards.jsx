import React, { Fragment } from 'react';
import NewsData from '../../../assets/data/news.js';
import '../../../assets/styles/components/news/cards.scss';

const NewsCard = React.lazy(() => import('./NewsCard'));

export default function NewsSlider() {
  const renderContent = () => {
    return (
      <div className="news-cards-wrapper">
        {NewsData.map((card) => (
          <NewsCard key={card.id} card={card} />
        ))}
      </div>
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
}
