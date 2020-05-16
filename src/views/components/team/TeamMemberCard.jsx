import React from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
import Img from '../../shared/Img';

export default function TeamMemberCard({ member, showMemberDetails }) {
  return (
    <div className="team-slide-wrapper__member-card">
      <div
        className="team-slide-wrapper__member-card__content"
        role="button"
        onClick={() => showMemberDetails(member)}
      >
        <Img
          src={isDeviceSmart() ? member.image.mobile : member.image.desktop}
          alt={member.title}
        />
        <section>
          <h1>{member.name}</h1>
          <h2>{member.title}</h2>
        </section>
      </div>
    </div>
  );
}
