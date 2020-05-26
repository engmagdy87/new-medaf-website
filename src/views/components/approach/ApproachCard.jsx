import React from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
const Img = React.lazy(() => import('../../shared/Img'));

export default function ApproachCard({ card, totalCards = 1 }) {
  return (
    <div
      className="approach-slide-wrapper__card"
      style={{ width: `calc(100%/${totalCards} - 1%)` }}
    >
      {isDeviceSmart() ? (
        <Img src={card.image.mobile} alt={card.title} />
      ) : null}

      {!isDeviceSmart() ? (
        <Img src={card.image.desktop} alt={card.title} />
      ) : null}
      <h1>{card.title}</h1>
      <div>
        <p>{card.body}</p>
      </div>
    </div>
  );
}
