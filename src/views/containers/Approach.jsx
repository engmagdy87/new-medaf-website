import React from 'react';
import ApproachData from '../../assets/data/approach.js';
import '../../assets/styles/containers/approach.scss';
import isDeviceSmart from '../../helpers/DetectIsDeviceSmart.js';
const ApproachSlider = React.lazy(() =>
  import('../components/approach/1/ApproachSlider')
);
const GroupSlider = React.lazy(() =>
  import('../components/approach/1/GroupSlider')
);

export default function Approach() {
  const renderContent = () => {
    if (isDeviceSmart())
      return Object.keys(ApproachData).map((groupId) => (
        <GroupSlider key={groupId} groupData={ApproachData[groupId].data} />
      ));

    return <ApproachSlider />;
  };

  return (
    <div id="approach" className="wrapper approach-wrapper">
      {renderContent()}
    </div>
  );
}
