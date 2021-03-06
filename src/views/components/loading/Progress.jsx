import React from 'react';
import '../../../assets/styles/components/progress.scss';

export default function Progress({ value }) {
  return (
    <div className="progress-wrapper">
      <div
        className="progress-wrapper__scale"
        style={{ width: value + '%' }}
      ></div>
      {/* <h5>{value}%</h5> */}
    </div>
  );
}
