import React, { useState, Fragment } from 'react';
import '../../../assets/styles/components/team/slider.scss';
import '../../../assets/styles/components/team/slide.scss';
import { Carousel } from 'react-bootstrap';
const CustomCarousel = React.lazy(() =>
  import('../../shared/CustomCarousel.jsx')
);
const BoardMemberCard = React.lazy(() => import('./BoardMemberCard'));
const TeamMemberCard = React.lazy(() => import('./TeamMemberCard'));
const MemberDetails = React.lazy(() => import('./MemberDetails'));

export default function GroupSlider({ groupData, groupId }) {
  const [activeSlideId, setActiveSlideId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const showMemberDetails = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const renderSlides = (slide, index) => {
    switch (groupId) {
      case '0':
        return (
          <Carousel.Item key={index}>
            <BoardMemberCard
              member={slide}
              showMemberDetails={showMemberDetails}
            />
          </Carousel.Item>
        );
      case '1':
        return (
          <Carousel.Item key={index}>
            <TeamMemberCard
              member={slide}
              showMemberDetails={showMemberDetails}
            />
          </Carousel.Item>
        );

      default:
        return null;
    }
  };
  const renderContent = () => {
    return (
      <div className="team-slider-wrapper">
        <CustomCarousel
          activeSlideId={activeSlideId}
          setActiveSlideId={setActiveSlideId}
        >
          {groupData.map(renderSlides)}
        </CustomCarousel>
        <MemberDetails
          member={selectedMember}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    );
  };

  return <Fragment>{renderContent()}</Fragment>;
}
