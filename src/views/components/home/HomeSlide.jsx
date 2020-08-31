import React from 'react';
import {
  isDeviceSmart,
  isIPad,
  isIPadPro,
} from '../../../helpers/DetectIsDeviceSmart';
import '../../../assets/styles/components/home/slide.scss';

export default function HomeSlide({ content }) {
  const imageSrc = () => {
    if (isIPad()) return content.image.Ipad;
    else if (isIPadPro()) return content.image.IpadPro;
    else if (isDeviceSmart()) return content.image.mobile;
    else return content.image.desktop;
  };
  return (
    <div
      className="home-slide-wrapper"
      style={{
        backgroundImage: `url(${imageSrc()})`,
      }}
    >
      {content.body}
    </div>
  );
}
