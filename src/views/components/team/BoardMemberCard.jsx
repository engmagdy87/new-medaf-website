import React from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
const Img = React.lazy(() => import('../../shared/Img'));

export default function BoardMemberCard({
  member,
  // showMemberDetails,
}) {
  return (
    <div className="team-slide-wrapper__team-members-wrapper__member">
      <div className="team-slide-wrapper__team-members-wrapper__member__first-section">
        <Img
          src={isDeviceSmart() ? member.image.mobile : member.image.desktop}
          alt={member.title}
        />
        <h3>{member.signature}</h3>
      </div>
      <div className="team-slide-wrapper__team-members-wrapper__member__second-section">
        <h1>{member.name}</h1>
        <h2>{member.title}</h2>
        <div>
          <p>{member.bio}</p>
        </div>
      </div>

      {/* <button onClick={() => showMemberDetails(member)}>READ MORE</button> */}
    </div>
  );
}
