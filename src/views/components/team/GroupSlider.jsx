import React, { useState, Fragment } from 'react';
import { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../../../assets/styles/components/team/slider.scss';
import '../../../assets/styles/components/team/slide.scss';
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

  const thumbnails = new Array(groupData.length).fill(
    <div
      style={{ width: '30px', height: '2px', backgroundColor: 'white' }}
    ></div>
  );
  const renderSlides = (slide, index) => {
    switch (groupId) {
      case '0':
        return (
          <BoardMemberCard
            key={index}
            member={slide}
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
  const renderContent = () => {
    return (
      <div className="team-slider-wrapper">
        <CustomCarousel
          activeSlideId={activeSlideId}
          setActiveSlideId={setActiveSlideId}
        >
          {groupData.map(renderSlides)}
        </CustomCarousel>
        <Dots
          thumbnails={thumbnails}
          value={activeSlideId}
          onChange={setActiveSlideId}
          number={groupData.length}
        />
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
