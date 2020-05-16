import React from 'react';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
import TruncateText from '../../../helpers/StringsHelper';
const Img = React.lazy(() => import('../../shared/Img'));

export default function BoardMemberCard({
  member,
  cardWidth = 100,
  showMemberDetails,
}) {
  return (
    <div
      className="team-slide-wrapper__board-card"
      style={{
        width: cardWidth === 100 ? '100%' : `calc(${cardWidth}% - 0.5%)`,
      }}
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
