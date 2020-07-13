import React from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
import '../../../assets/styles/components/approach/card.scss';

export default function ApproachCard({ card, cardId }) {
  const imageSrc = isDeviceSmart() ? card.image.mobile : card.image.desktop;
  return (
    <div
      className="approach-card-wrapper"
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <div
        className={`approach-card-wrapper__content ${
          cardId % 2 === 0
            ? 'approach-card-wrapper__content--right'
            : 'approach-card-wrapper__content--left'
        }`}
      >
        <h1>{card.title}</h1>
        <p
          style={{
            marginLeft: cardId % 2 === 0 ? 'auto' : '',
          }}
        >
          {card.body}
        </p>
      </div>
    </div>
  );
}
