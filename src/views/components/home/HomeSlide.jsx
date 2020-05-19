import React from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
import '../../../assets/styles/components/home/slide.scss';

export default function HomeSlide({ content }) {
  const imageSrc = isDeviceSmart()
    ? content.image.mobile
    : content.image.desktop;
  return (
    <div
      className="home-slide-wrapper"
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <h1>{content.body}</h1>
      {content.actions.map((action, index) => (
        <div key={index}>
          <a href={action.url}>{action.text}</a>
          <br />
        </div>
      ))}
    </div>
  );
}
