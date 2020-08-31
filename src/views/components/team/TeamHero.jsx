import React from 'react';
import Arrow from '../../../assets/images/about/arrow.png';
import { isDeviceSmart } from '../../../helpers/DetectIsDeviceSmart';
import DesktopTeamHeroImage from '../../../assets/images/team/desktop/hero.jpg';
import MobileTeamHeroImage from '../../../assets/images/team/mobile/hero.jpg';
import '../../../assets/styles/components/team/slide.scss';

export default function TeamHero() {
  const imageSrc = isDeviceSmart() ? MobileTeamHeroImage : DesktopTeamHeroImage;
  return (
    <div
      className="team-slide-wrapper"
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <div className="team-slide-wrapper__text">
        <h1>
          “<strong>At MEDAF,</strong> our most valued asset is the people, the
          people we work with & the people we work to serve. We Are a team of
          dedicated and highly responsive professionals; a strategic partner,
          advisor and consultant for our clients.”
        </h1>
      </div>
      <a href="#team-member-1" className="team-slide-wrapper__arrow">
        <img id="arrow" src={Arrow} alt="arrow" />
        <p className="team-slide-wrapper__read-more">ABOUT OUR FOUNDERS</p>
      </a>
    </div>
  );
}
