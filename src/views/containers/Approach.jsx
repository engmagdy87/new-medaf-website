import React from 'react';
import '../../assets/styles/containers/approach.scss';
const ApproachSlider = React.lazy(() =>
  import('../components/approach/ApproachSlider')
);

export default function Approach() {
  return (
    <div id="approach" className="approach-wrapper">
      <ApproachSlider />
    </div>
  );
}
