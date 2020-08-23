import React, { useEffect, useState } from 'react';
import CrossfadeImage from 'react-crossfade-image';
import Progress from './Progress';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
import logo from '../../../assets/images/medaf-typeface-white.png';
import '../../../assets/styles/components/splash-screen.scss';
import SplashScreenData from '../../../assets/data/splachscreen.js';

const Img = React.lazy(() => import('../../shared/Img'));

export default function SplashScreen({ value, step, totalTime }) {
  let imageSrc = null;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  if (isDeviceSmart()) imageSrc = SplashScreenData[0].image.mobile;
  else imageSrc = SplashScreenData[0].image.desktop;

  const [targetImage, setTargetImage] = useState(imageSrc);

  useEffect(() => {
    if (currentSlideIndex <= SplashScreenData.length - 1) {
      let srcImage = null;
      if (isDeviceSmart())
        srcImage = SplashScreenData[currentSlideIndex].image.mobile;
      else srcImage = SplashScreenData[currentSlideIndex].image.desktop;
      setTargetImage(srcImage);
    }
  }, [currentSlideIndex]);
  useEffect(() => {
    setCurrentSlideIndex((value / 100) * SplashScreenData.length);
  }, [value]);

  const renderText = () => {
    if (currentSlideIndex > SplashScreenData.length - 1) return;
    return SplashScreenData[currentSlideIndex].text[0];
  };

  return (
    <div className="splash-screen-wrapper">
      <Img src={logo} alt={'medaf logo'} />
      <div className="splash-screen-wrapper__container">
        <div
          className={`splash-screen-wrapper__text ${
            currentSlideIndex === 0
              ? 'splash-screen-wrapper__text--show'
              : 'splash-screen-wrapper__text--hide'
          }`}
        >
          <div className="splash-screen-wrapper__text--right">
            {SplashScreenData[0].text[0].split(' ').map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="splash-screen-wrapper__text--right">
            {SplashScreenData[0].text[1].split(' ').map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        {/* <div
          id="splachscreen-image"
          className="splash-screen-wrapper__image"
        ></div> */}
        <CrossfadeImage
          src={targetImage}
          containerClass="splash-screen-wrapper__image"
          duration={500}
        />
        <div
          className={`splash-screen-wrapper__text ${
            currentSlideIndex === 0
              ? 'splash-screen-wrapper__text--show'
              : 'splash-screen-wrapper__text--hide'
          }`}
        >
          <div className="splash-screen-wrapper__text--left">
            {SplashScreenData[0].text[2].split(' ').map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="splash-screen-wrapper__text--left">
            {SplashScreenData[0].text[3].split(' ').map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
      <p
        className={`${
          currentSlideIndex === 0
            ? 'splash-screen-wrapper__text--hide'
            : 'splash-screen-wrapper__text--show'
        }`}
      >
        {renderText()}
      </p>
      <Progress value={value} />
    </div>
  );
}
