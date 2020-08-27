import React from 'react';
import Arrow from '../../assets/images/business/top-arrow.svg';
import '../../assets/styles/shared/back-to-business.scss';

export default function BackToBusiness({ activeItem }) {
  return (
    <a href="#business">
      <div
        className={`back-to-business-wrapper ${
          activeItem === 'business'
            ? 'back-to-business-wrapper--show'
            : 'back-to-business-wrapper--hide'
        }`}
      >
        <img id="arrow" src={Arrow} alt="arrow" />
      </div>
    </a>
  );
}
