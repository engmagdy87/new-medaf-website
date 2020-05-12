import React, { useEffect, useState } from 'react';
import Progress from './Progress';
import isDeviceSmart from '../../../helpers/DetectIsDeviceSmart';
import logo from '../../../assets/images/medaf-typeface.png';
import '../../../assets/styles/components/splash-screen.scss';
import SplashScreenData from '../../../assets/data/splachscreen';
const Img = React.lazy(() => import('../../shared/Img'));

export default function SplashScreen({ value }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  useEffect(() => {
    setCurrentSlideIndex((value / 100) * 4);
  }, [value]);
  const renderImage = () => {
    const slideObject = SplashScreenData[currentSlideIndex];
    let imageSrc = null;
    if (isDeviceSmart()) imageSrc = slideObject.image.mobile;
    else imageSrc = slideObject.image.desktop;
    return <Img src={imageSrc} alt={slideObject.alt} />;
  };
  const renderText = () => {
    return SplashScreenData[currentSlideIndex].text;
  };

  return (
    <div className="splash-screen-wrapper">
      <Img src={logo} alt={'medaf logo'} />
      {renderImage()}
      <Progress value={value} />
      <p>{renderText()}</p>
    </div>
  );
}
