import React from 'react';
import '../../assets/styles/containers/business.scss';
import isDeviceSmart from '../../helpers/DetectIsDeviceSmart.js';
const BusinessCards = React.lazy(() =>
  import('../components/business/BusinessCards')
);
const GroupSlider = React.lazy(() =>
  import('../components/business/GroupSlider')
);

export default function Business() {
  const renderContent = () => {
    if (isDeviceSmart()) return <GroupSlider />;
    return <BusinessCards />;
  };

  return (
    <div id="business" className="wrapper business-wrapper">
      {renderContent()}
    </div>
  );
}
