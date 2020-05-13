import React from 'react';
import Img from '../../shared/Img';
import '../../../assets/styles/components/approach/slide.scss';

export default function ApproachSlide({ innerSlides, slideNumber }) {
  return (
    <div className="approach-slide-wrapper">
      <h2 className="approach-slide-wrapper__title">{innerSlides.title}</h2>
      <div className="approach-slide-wrapper__cards">
        {innerSlides.data.map((slide) => (
          <div
            key={`${slideNumber}${slide.id}`}
            className="approach-slide-wrapper__card"
            style={{ width: `calc(100%/${innerSlides.data.length} - 1%)` }}
          >
            <Img src={slide.image} alt={slide.title} />
            <h1>{slide.title}</h1>
            <div>
              <p>{slide.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}