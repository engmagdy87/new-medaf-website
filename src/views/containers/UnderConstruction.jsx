import React from "react";
import UnderConstructionImage from "../../assets/images/under-construction.svg";
import "../../assets/styles/containers/under-construction.scss";

export default function UnderConstruction() {
  return (
    <div className="under-construction-wrapper">
      <img src={UnderConstructionImage} alt="Under Construction" />
      <h1>
        Thank you for visiting MEDAF. <br />
        Our mobile site is under development, until then, <br />
        please open our website from your PC.
      </h1>
    </div>
  );
}
