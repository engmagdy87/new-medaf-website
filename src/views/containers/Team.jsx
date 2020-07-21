import React from 'react';
import TeamData from '../../assets/data/team.js';
import '../../assets/styles/containers/team.scss';
const TeamHero = React.lazy(() => import('../components/team/TeamHero'));
const TeamMembers = React.lazy(() => import('../components/team/TeamMembers'));

export default function Team() {
  return (
    <div id="team" className="wrapper team-wrapper">
      <TeamHero />
      <div id="team-member-1">
        <TeamMembers members={TeamData.slice(0, 2)} targetId="team-member-2" />
      </div>
      <div id="team-member-2">
        <TeamMembers members={TeamData.slice(2)} />
      </div>
    </div>
  );
}
