import React from 'react';
import '../../assets/styles/containers/home.scss';
const HomeSlider = React.lazy(() => import('../components/home/HomeSlider'));
const Footer = React.lazy(() => import('../shared/Footer'));

export default function Home() {
  return (
    <div id="home" className="home-wrapper">
      <HomeSlider />
      <Footer />
    </div>
  );
}
