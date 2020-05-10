import React from 'react';
import Progress from './Progress';
import logo from '../../../assets/images/logo.png';
import firstImage from '../../../assets/images/spinner/1.jpg';
import secondImage from '../../../assets/images/spinner/2.jpg';
import thirdImage from '../../../assets/images/spinner/3.jpg';
import fourthImage from '../../../assets/images/spinner/4.jpg';
import '../../../assets/styles/components/splash-screen.scss';

export default function SplashScreen({ value }) {
  const renderImage = () => {
    switch (value) {
      case 0:
        return firstImage;
      case 25:
        return secondImage;
      case 50:
        return thirdImage;
      case 75:
        return fourthImage;

      default:
        break;
    }
  };
  const renderText = () => {
    switch (value) {
      case 0:
        return 'Sustaining Balance';
      case 25:
        return 'Optimizing Potential';
      case 50:
        return 'Transforming Mindsets';
      case 75:
        return 'Leading Trends';

      default:
        break;
    }
  };

  return (
    <div className="splash-screen-wrapper">
      <img src={logo} alt="medaf" />
      <img src={renderImage()} alt="spinner" />
      <Progress value={value} />
      <p>{renderText()}</p>
    </div>
  );
}
