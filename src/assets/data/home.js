import React from "react";

const DesktopImage1 = require("../../assets/images/home/desktop/medaf-home-1.jpg")
const DesktopImage2 = require("../../assets/images/home/desktop/medaf-home-2.jpg")
const DesktopImage3 = require("../../assets/images/home/desktop/medaf-home-3.jpg")
const MobileImage1 = require("../../assets/images/home/mobile/medaf-home-1.jpg")
const MobileImage2 = require("../../assets/images/home/mobile/medaf-home-2.jpg")
const MobileImage3 = require("../../assets/images/home/mobile/medaf-home-3.jpg")
const IpadImage1 = require("../../assets/images/home/desktop/medaf-home-1.jpg")
const IpadImage2 = require("../../assets/images/home/desktop/medaf-home-2.jpg")
const IpadImage3 = require("../../assets/images/home/ipad/medaf-home-3.jpg")
const IpadProImage1 = require("../../assets/images/home/desktop/medaf-home-1.jpg")
const IpadProImage2 = require("../../assets/images/home/desktop/medaf-home-2.jpg")
const IpadProImage3 = require("../../assets/images/home/ipad-pro/medaf-home-3.jpg")

const homeData = [
  {
    "id": 0,
    "body": (<h1 style={{ fontFamily: 'Suisse Light' }}><strong style={{ fontFamily: 'Suisse Regular' }}>MEDAF is a strategic partnership</strong><br />between Egypt’s Matrex Capital, founded by Mohab Zakaria in 2003 & Kuwait’s Al- Raya Al-Mutamayeza Holding, founded by the Al-Fajii family in 1958.</h1>),
    "image": {
      desktop: DesktopImage1,
      mobile: MobileImage1,
      Ipad: IpadImage1,
      IpadPro: IpadProImage1,
    }
  },
  {
    "id": 1,
    "body": (<h1 style={{ fontFamily: 'Suisse Light' }}><strong style={{ fontFamily: 'Suisse Regular' }}><span style={{ fontFamily: 'Gothic Medium', fontSize: '2.8rem' }}>OUR MISSION</span></strong> is to optimise the unique value proposition of our clients' businesses and help them map out a sustainable growth journey towards their goals. We are doing so by creatively combining our group's three areas of expertise; financial services, business operations and technology.</h1>),
    "image": {
      desktop: DesktopImage2,
      mobile: MobileImage2,
      Ipad: IpadImage2,
      IpadPro: IpadProImage2,
    }
  },
  {
    "id": 2,
    "body": "",
    "image": {
      desktop: DesktopImage3,
      mobile: MobileImage3,
      Ipad: IpadImage3,
      IpadPro: IpadProImage3,
    }
  }
]


export default homeData