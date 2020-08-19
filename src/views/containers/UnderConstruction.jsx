import React from 'react';
import UnderConstructionImage from '../../assets/images/under-construction.svg';
import '../../assets/styles/containers/under-construction.scss';

export default function UnderConstruction() {
  return (
    <div className="under-construction-wrapper">
      <img src={UnderConstructionImage} alt="Under Construction" />
      <h1>
        <span>Under</span> Construction
      </h1>
    </div>
  );
}
