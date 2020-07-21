import React, { Fragment } from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
import MedafLogo from '../../../assets/images/medaf-icon-white.png';

export default function CardDetails({ card }) {
  const renderContent = () => {
    if (card === null) return null;
    const imageSrc = isDeviceSmart() ? card.image.mobile : card.image.desktop;
    return (
      <div className="business-card-wrapper__content">
        <img
          className="business-card-wrapper__content__hq-image"
          src={imageSrc}
          alt={card.title}
        />
        <img
          className="business-card-wrapper__content__logo"
          src={MedafLogo}
          alt="medaf logo"
        />
        <div className="business-card-wrapper__content__section">
          <div>{card.completeTitle}</div>
          <div className="business-card-wrapper__content__section__details">
            <div>{card.description}</div>
            <a href={card.website.url}>{card.website.text}</a>
          </div>
        </div>
      </div>
    );
  };
  return <Fragment>{renderContent()}</Fragment>;
}
