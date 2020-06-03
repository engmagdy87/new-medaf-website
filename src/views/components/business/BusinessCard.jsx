import React, { useState } from 'react';
import '../../../assets/styles/components/business/card.scss';
const BusinessMemberCard = React.lazy(() => import('./BusinessMemberCard'));
const CardDetails = React.lazy(() => import('./CardDetails'));

export default function BusinessSlide({ slide }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const showCardDetails = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };
  return (
    <div className="business-card-wrapper">
      <BusinessMemberCard member={slide} showCardDetails={showCardDetails} />
      <CardDetails
        card={selectedMember}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
