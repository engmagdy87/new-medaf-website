import React from 'react';
import '../../../assets/styles/components/home/slide.scss';

export default function Slide({ content }) {
  return (
    <div
      className="home-slide-wrapper"
      style={{
        backgroundImage: `url(${content.image})`,
      }}
    >
      <h1>{content.body}</h1>
      {content.actions.map((action, index) => (
        <div key={index}>
          <a href={action.url} target="__blank">
            {action.text}
          </a>
          <br />
        </div>
      ))}
    </div>
  );
}
