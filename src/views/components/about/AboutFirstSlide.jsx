import React from 'react';
import { isDeviceSmart } from '../../../helpers/DetectIsDeviceSmart';
import MedafLogo from '../../../assets/images/medaf-icon-white.png';
import '../../../assets/styles/components/about/slide.scss';

export default function AboutSlide({ content }) {
  const imageSrc = isDeviceSmart()
    ? content.image.mobile
    : content.image.desktop;
  return (
    <div className="about-slide-wrapper">
      <img
        className="about-slide-wrapper__hq-image"
        src={imageSrc}
        alt={content.title}
      />
      <img
        className="about-slide-wrapper__logo"
        src={MedafLogo}
        alt="medaf logo"
      />
      <div className="about-slide-wrapper__content">
        <h1>{content.title}</h1>
        <div className="about-slide-wrapper__content__details">
          {content.body.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <p>{content.person.name}</p>
          <p>{content.person.title}</p>
          <p>{content.person.signature}</p>
          <p>
            <a href={`mailto:${content.email}`}>{content.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
