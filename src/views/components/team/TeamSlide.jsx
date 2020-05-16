import React, { useState } from 'react';
import BoardMemberCard from './BoardMemberCard';
import TeamMemberCard from './TeamMemberCard';
import '../../../assets/styles/components/team/slide.scss';
import MemberDetails from './MemberDetails';

export default function TeamSlide({ innerSlides, slideNumber }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const showMemberDetails = (member) => {
    document.getElementById('arrow').style.display = 'none';
    setSelectedMember(member);
    setShowModal(true);
  };
  const renderSlides = (slide, index) => {
    switch (slideNumber) {
      case '0':
        return (
          <BoardMemberCard
            key={index}
            member={slide}
            cardWidth={100 / innerSlides.length}
            showMemberDetails={showMemberDetails}
          />
        );
      case '1':
        return (
          <TeamMemberCard
            key={index}
            member={slide}
            showMemberDetails={showMemberDetails}
          />
        );

      default:
        return null;
    }
  };
  const correspondingCSSClass = () => {
    switch (slideNumber) {
      case '0':
        return 'team-slide-wrapper__cards';
      case '1':
        return 'team-slide-wrapper__grid';

      default:
        break;
    }
  };
  return (
    <div className="team-slide-wrapper">
      <div className={correspondingCSSClass()}>
        {innerSlides.map(renderSlides)}
      </div>
      <MemberDetails
        member={selectedMember}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
