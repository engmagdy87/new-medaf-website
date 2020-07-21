import React from 'react';
import BoardMemberCard from './BoardMemberCard';
import Arrow from '../../../assets/images/team/arrow.png';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
import DesktopTeamMemberImage from '../../../assets/images/team/desktop/team-bg.jpg';
import MobileTeamMemberImage from '../../../assets/images/team/mobile/team-bg.jpg';
import '../../../assets/styles/components/team/slide.scss';

export default function TeamMembers({ members, targetId }) {
  const imageSrc = isDeviceSmart()
    ? MobileTeamMemberImage
    : DesktopTeamMemberImage;
  const renderMember = (member) => (
    <BoardMemberCard key={member.id} member={member} />
  );
  return (
    <div className="team-slide-wrapper__team-members-wrapper">
      <img
        src={imageSrc}
        alt="slide background"
        className="team-slide-wrapper__team-members-wrapper__Img"
      />
      <div className="team-slide-wrapper__team-members-wrapper__members">
        {members.map((member) => renderMember(member))}
      </div>
      <a
        href={`#${targetId}`}
        className="team-slide-wrapper__team-members-wrapper__members__arrow"
        style={{ display: targetId === undefined ? 'none' : 'block' }}
      >
        <img
          id="arrow"
          src={Arrow}
          alt="arrow"
          className="team-slide-wrapper__team-members-wrapper__members__arrow__Img"
        />
        <p className="team-slide-wrapper__team-members-wrapper__members__read-more">
          READ MORE ABOUT OUR FOUNDERS
        </p>
      </a>
    </div>
  );
}
