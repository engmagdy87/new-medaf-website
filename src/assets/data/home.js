import React from "react";

const DesktopImage1 = require("../../assets/images/home/desktop/medaf-home-1.jpg")
const DesktopImage2 = require("../../assets/images/home/desktop/medaf-home-2.jpg")
const DesktopImage3 = require("../../assets/images/home/desktop/medaf-home-3.jpg")
const MobileImage1 = require("../../assets/images/home/mobile/medaf-home-1.jpg")
const MobileImage2 = require("../../assets/images/home/mobile/medaf-home-2.jpg")
const MobileImage3 = require("../../assets/images/home/mobile/medaf-home-3.jpg")

const homeData = [
  {
    "id": 0,
    "body": (<h1 style={{ fontFamily: 'Suisse Light' }}><strong style={{ fontFamily: 'Suisse Regular' }}>MEDAF is a strategic partnership</strong><br />between Egypt’s Matrex Capital, founded by Mohab Zakaria in 2003 & Kuwait’s Al- Raya Al-Mutamayeza Holding, founded by the Al-Fajii family in 1958.</h1>),
    "image": {
      desktop: DesktopImage1,
      mobile: MobileImage1
    }
  },
  {
    "id": 1,
    "body": (<h1 style={{ fontFamily: 'Suisse Light' }}><strong style={{ fontFamily: 'Suisse Regular' }}>Our Mission is to creatively integrate our</strong><br />group’s three core services; finance, business operations & technology, to cultivate fit for purpose solutions for clients. We optimise the unique value proposition of a client’s business & help them map out and lead a sustainable growth journey towards their goals.</h1>),
    "image": {
      desktop: DesktopImage2,
      mobile: MobileImage2
    }
  },
  {
    "id": 2,
    "body": "",
    "image": {
      desktop: DesktopImage3,
      mobile: MobileImage3
    }
  }
]


export default homeData