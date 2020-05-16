import React from 'react';
import '../../assets/styles/containers/team.scss';
const TeamSlider = React.lazy(() => import('../components/team/TeamSlider'));

export default function Team() {
  return (
    <div id="team" className="team-wrapper">
      <TeamSlider />
    </div>
  );
}
