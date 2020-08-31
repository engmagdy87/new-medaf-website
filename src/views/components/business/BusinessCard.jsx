import React from 'react';
import '../../../assets/styles/components/business/card.scss';
import { isDeviceSmart } from '../../../helpers/DetectIsDeviceSmart';

export default function BusinessSlide({ slide }) {
  const imageSrc = isDeviceSmart() ? slide.image.mobile : slide.image.desktop;
  return (
    <div className="business-card-wrapper">
      <div
        className="business-card-wrapper__member-card"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${imageSrc})`,
        }}
      >
        <h2>{slide.title}</h2>
        {slide.actions.map((action, index) => (
          <a key={index} href={`#${slide.id}`}>
            {action.text}
          </a>
        ))}
      </div>
    </div>
  );
}
