const DesktopImage1 = require("../../assets/images/home/desktop/medaf-home-1.png")
const DesktopImage2 = require("../../assets/images/home/desktop/medaf-home-2.png")
const DesktopImage3 = require("../../assets/images/home/desktop/medaf-home-3.png")
const MobileImage1 = require("../../assets/images/home/mobile/medaf-home-1.png")
const MobileImage2 = require("../../assets/images/home/mobile/medaf-home-2.png")
const MobileImage3 = require("../../assets/images/home/mobile/medaf-home-3.png")

export default [
  {
    "id": 0,
    "body": "Our Vision is to ensure that our expanding investment portfolio provides our clients with unique expertise, guidance & service.",
    "actions": [
      {
        "text": "read more at about medaf",
        "url": ""
      }
    ],
    "image": {
      desktop: DesktopImage1,
      mobile: MobileImage1
    }
  },
  {
    "id": 1,
    "body": "We provide a uniquely integrated service model, which combines non-banking financial services with business operations across multiple sectors and industries.",
    "actions": [
      {
        "text": "read more at our approach",
        "url": ""
      }
    ],
    "image": {
      desktop: DesktopImage2,
      mobile: MobileImage2
    }
  },
  {
    "id": 2,
    "body": "Our Vision is to ensure that our expanding investment portfolio provides our clients with unique expertise, guidance & service.",
    "actions": [
      {
        "text": "read more at our approach",
        "url": ""
      },
      {
        "text": "read more at news / events",
        "url": ""
      }
    ],
    "image": {
      desktop: DesktopImage3,
      mobile: MobileImage3
    }
  }
]
