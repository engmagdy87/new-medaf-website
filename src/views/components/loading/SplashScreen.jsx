import React, { useEffect, useState } from 'react';
import Progress from './Progress';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
import logo from '../../../assets/images/medaf-typeface.png';
import '../../../assets/styles/components/splash-screen.scss';
import SplashScreenData from '../../../assets/data/splachscreen.js';
const Img = React.lazy(() => import('../../shared/Img'));

export default function SplashScreen({ value, totalTime }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  useEffect(() => {
    animateImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setCurrentSlideIndex((value / 100) * 4);
  }, [value]);
  const renderText = () => {
    if (currentSlideIndex > SplashScreenData.length - 1) return;
    return SplashScreenData[currentSlideIndex].text;
  };

  const animateImages = () => {
    const imageContainer = document.getElementById('splachscreen-image');
    var keyFrames = SplashScreenData.map((slideObject) => {
      let imageSrc = null;
      if (isDeviceSmart()) imageSrc = `url(${slideObject.image.mobile})`;
      else imageSrc = `url(${slideObject.image.desktop})`;
      return { backgroundImage: imageSrc };
    });

    var timing = {
      duration: totalTime,
    };
    imageContainer.animate(keyFrames, timing);
  };

  return (
    <div className="splash-screen-wrapper">
      <Img src={logo} alt={'medaf logo'} />
      <div
        id="splachscreen-image"
        className="splash-screen-wrapper__image"
      ></div>
      <Progress value={value} />
      <p>{renderText()}</p>
    </div>
  );
}
