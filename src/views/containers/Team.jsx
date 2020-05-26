import React from 'react';
import TeamData from '../../assets/data/team.js';
import '../../assets/styles/containers/team.scss';
import isDeviceSmart from '../../helpers/DetectIsDeviceSmart.js';
const TeamSlider = React.lazy(() => import('../components/team/TeamSlider'));
const GroupSlider = React.lazy(() => import('../components/team/GroupSlider'));

export default function Team() {
  const renderContent = () => {
    if (isDeviceSmart())
      return Object.keys(TeamData).map((groupId) => (
        <GroupSlider
          key={groupId}
          groupData={TeamData[groupId]}
          groupId={groupId}
        />
      ));

    return <TeamSlider />;
  };

  return (
    <div id="team" className="wrapper team-wrapper">
      {renderContent()}
    </div>
  );
}
