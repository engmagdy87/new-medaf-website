import React from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
import '../../../assets/styles/components/about/slide.scss';

export default function AboutSlide({ firstSection, secondSection }) {
  const firstImageSrc = isDeviceSmart()
    ? firstSection.image.mobile
    : firstSection.image.desktop;
  const secondImageSrc = isDeviceSmart()
    ? secondSection.image.mobile
    : secondSection.image.desktop;
  return (
    <div className="about-slide-wrapper">
      <div
        className="about-slide-wrapper__section"
        style={{
          backgroundImage: `url(${firstImageSrc})`,
        }}
      >
        <h1>{firstSection.title}</h1>
        <p className="about-slide-wrapper__section__first-content">
          {firstSection.body}
        </p>
      </div>
      <div
        className="about-slide-wrapper__section"
        style={{
          backgroundImage: `url(${secondImageSrc})`,
        }}
      >
        <h1>{secondSection.title}</h1>
        {secondSection.body.map((item, index) => (
          <div key={index}>
            <p className="about-slide-wrapper__section__second-content-title">
              {item.value}
            </p>
            <p className="about-slide-wrapper__section__second-content-details">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
