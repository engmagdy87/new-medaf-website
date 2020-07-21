import React, { Fragment } from 'react';
import { useEffect } from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
import MedafLogo from '../../../assets/images/medaf-icon-white.png';
const Img = React.lazy(() => import('../../shared/Img'));

export default function CardDetails({ card, showModal, setShowModal }) {
  useEffect(() => {
    if (showModal) openNav();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  let myModal;
  const openNav = () => {
    myModal.style.height = '100%';
  };

  const closeNav = () => {
    myModal.style.height = '0';
    setShowModal(false);

    if (document.getElementById('arrow') !== null)
      document.getElementById('arrow').style.display = 'block';
  };

  const renderContent = () => {
    if (card === null) return null;
    const imageSrc = isDeviceSmart() ? card.image.mobile : card.image.desktop;
    return (
      <div className="business-card-wrapper__modal">
        <div
          ref={(node) => (myModal = node)}
          className="business-card-wrapper__modal__overlay"
        >
          <a
            className="business-card-wrapper__modal__close-button"
            onClick={closeNav}
          >
            &times;
          </a>

          <div className="business-card-wrapper__modal__content">
            <img
              className="business-card-wrapper__modal__content__hq-image"
              src={imageSrc}
              alt={card.title}
            />
            <img
              className="business-card-wrapper__modal__content__logo"
              src={MedafLogo}
              alt="medaf logo"
            />
            <div className="business-card-wrapper__modal__content__section">
              <div>{card.completeTitle}</div>
              <div className="business-card-wrapper__modal__content__section__details">
                <div>{card.description}</div>
                <a href={card.website.url}>{card.website.text}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <Fragment>{renderContent()}</Fragment>;
}
