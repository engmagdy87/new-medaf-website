import React from "react";

const DesktopImage1 = require("../../assets/images/about/desktop/medaf-about-1.jpg")
const DesktopImage2 = require("../../assets/images/about/desktop/medaf-about-2.jpg")
const DesktopImage3 = require("../../assets/images/about/desktop/medaf-about-3.jpg")
const MobileImage1 = require("../../assets/images/about/mobile/medaf-about-1.jpg")
const MobileImage2 = require("../../assets/images/about/mobile/medaf-about-2.jpg")
const MobileImage3 = require("../../assets/images/about/mobile/medaf-about-3.jpg")


const aboutData = {
    "MEDAF INVESTMENTS": {
        "title": (<div>MEDAF<br />INVESTMENTS.</div>),
        "body": ["MEDAF Investments is a Kuwaiti-Egyptian business partnership, and is one of the fastest growing holding groups in the region. We provide a uniquely integrated service model, that combines finan- cial services, business operations & technology, across more than eight industries. Our primary focus is to grow from Egypt and es- tablish ourselves in Africa and the Middle East, with an outlook to expand into noted business hubs across the globe, such as Swit- zerland, the UK and China.", '“We are on the lookout for passionate investors, initiatives and pioneers to participate in the region’s uniquely promising mar- kets. We not only welcome, but invite enquiries and proposals from individuals and businesses in our communities.”'],
        "person": {
            "name": 'MR. MOHAB ZAKARIA,',
            'title': 'GLOBAL CEO, MEDAF',
            'signature': 'Mohab Zakaria'
        },
        'email': 'info@medafinvestment.com',
        "image": {
            desktop: DesktopImage1,
            mobile: MobileImage1
        }
    },
    "OUR VISION": {
        "title": 'OUR VISION',
        "body": '“We are a people centric organisation that believes in harnessing the collective capabilities of our globally integrated teams to bring clients’ businesses closer to their aspirations.”',
        "image": {
            desktop: DesktopImage2,
            mobile: MobileImage2
        }
    },
    "VALUES": {
        "title": 'VALUES',
        "body": [
            {
                'value': 'INTEGRITY',
                'details': 'We are dedicated to ethical conduct, transparency and complete trust with all of our stakeholders.'
            },
            {
                'value': 'INNOVATION',
                'details': 'We are purely committed to out-of-the-box limitless thinking; aiming to inspire & nurture our communities’ natural instinct to create.'
            },
            {
                'value': 'INCLUSION',
                'details': 'We believe in the inclusion of unheard voices from the regions we operate in, a key to excavating untapped talent.'
            },
            {
                'value': 'ACCOUNTABILITY',
                'details': 'Responsibility is an ethical philosophy that permeates all we do.'
            },
        ],
        "image": {
            desktop: DesktopImage3,
            mobile: MobileImage3
        }
    }
}

export default aboutData