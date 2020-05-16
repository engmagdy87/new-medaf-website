import React from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
const Img = React.lazy(() => import('../../shared/Img'));

export default function TeamMemberCard({ member, showMemberDetails }) {
  return (
    <div
      className="team-slide-wrapper__member-card"
      role="button"
      onClick={() => showMemberDetails(member)}
    >
      {isDeviceSmart() ? (
        <Img src={member.image.mobile} alt={member.title} />
      ) : null}
      <div className="team-slide-wrapper__member-card__content">
        {!isDeviceSmart() ? (
          <Img src={member.image.desktop} alt={member.title} />
        ) : null}
        <section>
          <h1>{member.name}</h1>
          <h2>{member.title}</h2>
        </section>
      </div>
    </div>
  );
}
