import React from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
import TruncateText from '../../../helpers/StringsHelper';
import Img from '../../shared/Img';

export default function BoardMemberCard({
  member,
  cardWidth,
  showMemberDetails,
}) {
  return (
    <div
      className="team-slide-wrapper__board-card"
      style={{ width: `calc(${cardWidth}% - 0.5%)` }}
    >
      <Img
        src={isDeviceSmart() ? member.image.mobile : member.image.desktop}
        alt={member.title}
      />
      <h1>{member.name}</h1>
      <h2>{member.title}</h2>
      <div>
        <p>{TruncateText(member.bio)}</p>
      </div>
      <button onClick={() => showMemberDetails(member)}>READ MORE</button>
    </div>
  );
}
