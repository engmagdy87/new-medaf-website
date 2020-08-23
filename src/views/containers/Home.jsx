import React from "react";
import Arrow from "../../assets/images/about/arrow.png";
import "../../assets/styles/containers/home.scss";
const HomeSlider = React.lazy(() => import("../components/home/HomeSlider"));
const Footer = React.lazy(() => import("../shared/Footer"));

export default function Home() {
  return (
    <div id="home" className="wrapper home-wrapper">
      <HomeSlider />
      <a href="#about" className="home-wrapper__arrow">
        <img
          id="arrow"
          src={Arrow}
          alt="arrow"
          style={{ marginTop: "-15px" }}
        />
      </a>
      <Footer />
    </div>
  );
}
