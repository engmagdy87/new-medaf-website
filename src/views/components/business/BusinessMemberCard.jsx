import React from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';

export default function BusinessMemberCard({ member, showCardDetails }) {
  const imageSrc = isDeviceSmart() ? member.image.mobile : member.image.desktop;
  return (
    <div
      className="business-card-wrapper__member-card"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${imageSrc})`,
      }}
    >
      <h2>{member.title}</h2>
      {member.actions.map((action, index) => (
        <span key={index} onClick={() => showCardDetails(member)}>
          {action.text}
        </span>
      ))}
    </div>
  );
}
