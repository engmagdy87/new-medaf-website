import React from 'react';
import Img from '../shared/Img';
import Footer from '../shared/Footer';
import ContactData from '../../assets/data/contact';
import isDeviceSmart from '../../helpers/DetectIsDeviceSmart.js';
import DesktopMap from '../../assets/images/contact/desktop/medaf-contact-map.jpg';
import MobileMap from '../../assets/images/contact/desktop/medaf-contact-map.jpg';
import '../../assets/styles/containers/contact.scss';
const IdentityCard = React.lazy(() =>
  import('../components/contact/IdentityCard')
);

export default function News() {
  const imageSrc = isDeviceSmart() ? MobileMap : DesktopMap;
  const renderContent = (identityCard, index) => {
    return <IdentityCard key={index} idCardData={identityCard} />;
  };

  return (
    <div id="contact" className="wrapper contact-wrapper">
      <h1>FIND US HERE</h1>
      <div className="contact-wrapper__content">
        <Img src={imageSrc} alt="map" />
        <div className="contact-wrapper__content__address">
          {ContactData.map(renderContent)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
