const DesktopImage1 = require("../../assets/images/contact/desktop/medaf-contact-1.jpg")
const DesktopImage2 = require("../../assets/images/contact/desktop/medaf-contact-2.jpg")
const DesktopImage3 = require("../../assets/images/contact/desktop/medaf-contact-3.jpg")
const DesktopImage4 = require("../../assets/images/contact/desktop/medaf-contact-4.jpg")
const MobileImage1 = require("../../assets/images/contact/mobile/medaf-contact-1.jpg")
const MobileImage2 = require("../../assets/images/contact/mobile/medaf-contact-2.jpg")
const MobileImage3 = require("../../assets/images/contact/mobile/medaf-contact-3.jpg")
const MobileImage4 = require("../../assets/images/contact/mobile/medaf-contact-4.jpg")

const contactData = [
    {
        "id": 0,
        "title": 'MEDAF Investments HQ',
        "address": '27th Floor, North Tower 2005C Nile City Towers Cornich El Nil, Ramlet Beaulac. Cairo, Egypt.',
        'telephones': ['(+2) 02-24619581', '(+2) 02-24619582', '(+2) 02-24619583'],
        "image": {
            desktop: DesktopImage1,
            mobile: MobileImage1
        }
    },
    {
        "id": 1,
        "title": 'Al Raya Al Mutamayeza, Holding HQ',
        "address": '39th Floor, Al Sanabel Tower Abdullah Al Ahmad St, Block 2, East, Kuwait City Post Code: 13016 Kuwait City, Kuwait.',
        'telephones': [],
        "image": {
            desktop: DesktopImage2,
            mobile: MobileImage2
        }
    },
    {
        "id": 2,
        "title": 'ANDERSON BERN CAPITAL MANAGEMENT LTD.',
        "address": '24th Floor, The Shard, 32 London Bridge st. SE1 9SG London, UK',
        'telephones': [],
        "image": {
            desktop: DesktopImage3,
            mobile: MobileImage3
        }
    },
    {
        "id": 3,
        "title": 'MATREX FINANCE LTD',
        "address": '6th Floor,2 London Wall Place, Barbican, London, United Kingdom, EC2Y 5AU.',
        'telephones': [],
        "image": {
            desktop: DesktopImage4,
            mobile: MobileImage4
        }
    },
]

export default contactData