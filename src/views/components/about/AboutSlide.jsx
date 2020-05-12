import React from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
import '../../../assets/styles/components/about/slide.scss';

export default function AboutSlide({ content }) {
  const imageSrc = isDeviceSmart()
    ? content.image.mobile
    : content.image.desktop;
  return (
    <div className="about-slide-wrapper">
      <img src={imageSrc} alt={content.title} />
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
