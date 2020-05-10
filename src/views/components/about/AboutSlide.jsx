import React from 'react';
import Arrow from '../../../assets/images/about/arrow.png';
import '../../../assets/styles/components/about/slide.scss';

export default function AboutSlide({ content, goToNextSlide }) {
  return (
    <div className="about-slide-wrapper">
      <img src={content.image} alt={content.title} />
      <img src={Arrow} alt="arrow" onClick={goToNextSlide} />
      <div>
        <h1>{content.title}</h1>
        <div>
          {content.body.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          {content.actions.map((action, index) => (
            <span key={index}>{action.text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
