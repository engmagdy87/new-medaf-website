import React from 'react';
import '../../assets/styles/containers/business.scss';
// import isDeviceSmart from '../../helpers/DetectIsDeviceSmart.js';
import CardDetails from '../components/business/CardDetails';
import BusinessData from '../../assets/data/business.js';
const BusinessCards = React.lazy(() =>
  import('../components/business/BusinessCards')
);
// const GroupSlider = React.lazy(() =>
//   import('../components/business/GroupSlider')
// );

export default function Business() {
  // const renderContent = () => {
  //   if (isDeviceSmart()) return <GroupSlider />;
  //   return <BusinessCards />;
  // };

  return (
    <div id="business" className="wrapper business-wrapper">
      <BusinessCards />
      {BusinessData.map((slide, index) => (
        <div id={`${slide.id}`} key={index}>
          <CardDetails card={slide} />
        </div>
      ))}
    </div>
  );
}
