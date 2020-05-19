import React, { useState } from 'react';
import '../../../assets/styles/components/business/card.scss';
const BusinessMemberCard = React.lazy(() => import('./BusinessMemberCard'));
const MemberDetails = React.lazy(() => import('./MemberDetails'));

export default function BusinessSlide({ slide }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const showMemberDetails = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };
  return (
    <div className="business-card-wrapper">
      <BusinessMemberCard
        member={slide}
        showMemberDetails={showMemberDetails}
      />
      <MemberDetails
        member={selectedMember}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
