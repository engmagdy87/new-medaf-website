import React from 'react';
import '../../assets/styles/containers/about.scss';
const AboutSlider = React.lazy(() => import('../components/about/AboutSlider'));

export default function About() {
  return (
    <div id="about" className="wrapper about-wrapper">
      <AboutSlider />
    </div>
  );
}
