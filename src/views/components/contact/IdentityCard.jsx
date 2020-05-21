import React from 'react';
import '../../../assets/styles/components/contact/identity-card.scss';

export default function IdentityCard({ idCardData }) {
  return (
    <div className="identity-card-wrapper">
      <h1>{idCardData.title}</h1>
      <div>
        <section>
          <p>Find us</p>
          <h5>{idCardData.address}</h5>
        </section>
        <section>
          <p>Call us</p>
          {idCardData.telephones.map((telNumber, index) => (
            <h5 key={index}>{telNumber}</h5>
          ))}
        </section>
      </div>
    </div>
  );
}
