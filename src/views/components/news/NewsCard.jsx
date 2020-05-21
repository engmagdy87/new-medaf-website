import React from 'react';
import '../../../assets/styles/components/news/card.scss';
import Img from '../../shared/Img';

export default function NewsSlide({ card }) {
  return (
    <div
      className="news-card-wrapper"
      role="button"
      onClick={() => window.open(`//${card.website.url}`, '__blank')}
    >
      <Img src={card.image} alt={card.title} />
      <section>
        <h1>{card.title}</h1>
        <span>{card.website.text}</span>
      </section>
    </div>
  );
}
