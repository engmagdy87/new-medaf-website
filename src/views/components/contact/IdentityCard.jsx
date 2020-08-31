import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { isDeviceSmart } from '../../../helpers/DetectIsDeviceSmart';
import '../../../assets/styles/components/contact/identity-card.scss';

export default function IdentityCard({ idCardData }) {
  const imageSrc = isDeviceSmart()
    ? idCardData.image.mobile
    : idCardData.image.desktop;
  return (
    <Container className="identity-card-wrapper">
      <Row>
        <Col xs={12} sm={6} className="identity-card-wrapper__img">
          <img src={imageSrc} alt={idCardData.title} />
        </Col>
        <Col xs={12} sm={6}>
          <div className="identity-card-content">
            <h1>{idCardData.title}</h1>
            <div>
              <p>{idCardData.address}</p>
              {idCardData.telephones.map((telNumber, index) => (
                <span key={index}>{telNumber}</span>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
