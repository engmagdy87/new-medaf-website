import React, { Fragment } from 'react';
import { useEffect } from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
const Img = React.lazy(() => import('../../shared/Img'));

export default function MemberDetails({ member, showModal, setShowModal }) {
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
    if (member === null) return null;
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
            <Img
              src={isDeviceSmart() ? member.image.mobile : member.image.desktop}
              alt={member.completeTitle}
            />
            <section>
              <h1>{member.completeTitle}</h1>
              <section>
                <p>{member.description}</p>
              </section>
              <a href={member.website.url}>{member.website.text}</a>
            </section>
          </div>
        </div>
      </div>
    );
  };
  return <Fragment>{renderContent()}</Fragment>;
}
