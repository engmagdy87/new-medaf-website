import React from 'react'

const DesktopImage1 = require("../../assets/images/business/desktop/medaf-business-1.jpg")
const DesktopImage2 = require("../../assets/images/business/desktop/medaf-business-2.jpg")
const DesktopImage3 = require("../../assets/images/business/desktop/medaf-business-3.jpg")
const DesktopImage4 = require("../../assets/images/business/desktop/medaf-business-4.jpg")
const DesktopImage5 = require("../../assets/images/business/desktop/medaf-business-5.jpg")
const DesktopImage6 = require("../../assets/images/business/desktop/medaf-business-6.jpg")
const DesktopImage7 = require("../../assets/images/business/desktop/medaf-business-7.jpg")
const DesktopImage8 = require("../../assets/images/business/desktop/medaf-business-8.jpg")
const MobileImage1 = require("../../assets/images/business/mobile/medaf-business-1.jpg")
const MobileImage2 = require("../../assets/images/business/mobile/medaf-business-2.jpg")
const MobileImage3 = require("../../assets/images/business/mobile/medaf-business-3.jpg")
const MobileImage4 = require("../../assets/images/business/mobile/medaf-business-4.jpg")
const MobileImage5 = require("../../assets/images/business/mobile/medaf-business-5.jpg")
const MobileImage6 = require("../../assets/images/business/mobile/medaf-business-6.jpg")
const MobileImage7 = require("../../assets/images/business/mobile/medaf-business-7.jpg")
const MobileImage8 = require("../../assets/images/business/mobile/medaf-business-8.jpg")

const businessData = [
    {
        "id": 0,
        "title": 'Finance Services',
        "completeTitle": (<h1>MEDAF FINANCE<br />HOLDING, MFH.</h1>),
        "description": (<div><p>MEDAF Finance Holding is the financial arm specialized in non-banking financial services. Regulated by the FRA in Egypt, we are strategically positioned to enable clients to expand their investment returns and participate in the high growth po- tential of the region. We provide a wide array of insights on equity, debt and re- gional investment strategies. Over decades of experience, we have derived techniques that have been uniquely tailored to help global investors gain access to the region. Our team analyses clients’ assets, liabilities and cash flows, defines in- vestment objectives and constraints, and then strategically identifies and selects appropriate asset allocations, bench- marks and risk management frameworks.</p>
            <h2>Services</h2>
            <p>—Asset management —Custody Services —Securities Brokerage —Investment Banking & Advisory —Consumer & Microfinance —Leasing —Factoring and *Securitisation.</p>
        </div>),
        "image": {
            desktop: DesktopImage1,
            mobile: MobileImage1
        },
        "actions": [
            {
                "text": "read more",
            }
        ],
        'website': {
            'text': 'Visit www.medafholding.com',
            'url': 'www.medafholding.com'
        }
    },
    {
        "id": 1,
        "title": 'Project Management',
        "completeTitle": (<h1>MEDAF PROJECT<br />MANAGEMENT.</h1>),
        "description": (<div><p>Our project management arm is the first point of contact for all projects put in motion by MEDAF. Through the dedicated business analysis and PMO units, our industry specialists work closely to deliver recommendations to MEDAF’s senior leaders and our clients on fulfilling projects.</p>
            <h2>Services</h2>
            <p>—Project consultancy —Technical Feasibility
studies —Project planning.</p>
        </div>),
        "image": {
            desktop: DesktopImage2,
            mobile: MobileImage2
        },
        "actions": [
            {
                "text": "read more",
            }
        ],
        'website': {
            'text': '',
            'url': ''
        }
    },
    {
        "id": 2,
        "title": 'Technology',
        "completeTitle": (<h1>NEW SMART EGYPT FOR PROGRAMMING TECHNOLOGIES, PRO-TECH.</h1>),
        "description": (<div><p>Protech offers a wide array of solutions in technological in- novation. With automation on the rise, and technological ad- vancements gaining exponential momentum, our solutions are tailored to cost-effectively support the needs of emerging mar- kets. Each of our businesses helps our clients’ companies gain access to their required digital solutions in order to both 1) gain competitive advantage and 2) navigate the ever-changing land- scape of the technological world.</p>
            <h2>Services</h2>
            <p>—E-payment platforms & applications (closed & open-loop) —Cyber-security solutions (using AI and machine-learning models) —Blockchain —Hospitality solutions —IT infrastructure —Full-fledged UI, UX & Core back-end solutions —Business intelligence units —Data analytics.</p>
        </div>),
        "image": {
            desktop: DesktopImage3,
            mobile: MobileImage3
        },
        "actions": [
            {
                "text": "read more",
            }
        ],
        'website': {
            'text': '',
            'url': ''
        }
    },
    {
        "id": 3,
        "title": 'Trade, supply chain & logistics',
        "completeTitle": (<h1>MEDITERRANEAN & AFRICA FOR TRADE AND EXPORT; MATREX.</h1>),
        "description": (<div><p>Our trade and export arm, led by Matrex, is one of MEDAF’s longeststanding services, with a wide network of trade opera- tions spanning 32 countries across the globe. Matrex had pio- neered the export of Egyptian Bitumen, and the import, export and local supply of food products, including meat, dairy, frozen vegetables and vegetable oils. Through the most recent estab- lishment of its dedicated trade unit operating between London and Cairo, Matrex has strengthened its trade operations to in- clude a more wholly integrated set of services.</p>
            <h2>Operations</h2>
            <p>Import and export, supply chain management,, such as sea- freight and air cargo, as well as the handling of customs & clear- ance for products such as Grains, agricultural crops & produce, beef, Egyptian cotton, precious metals, minerals, chemicals, and oil & natural gas.</p>
            <strong>—Covid-19 crisis items (e.g. hand-sanitizers, face masks, etc.)</strong>
        </div>),
        "image": {
            desktop: DesktopImage4,
            mobile: MobileImage4
        },
        "actions": [
            {
                "text": "read more",
            }
        ],
        'website': {
            'text': '',
            'url': ''
        }
    },
    {
        "id": 4,
        "title": 'Green Tech. & sustainable energy',
        "completeTitle": (<h1>MEDAF GREEN TECHNOLOGY & RENEWABLE ENERGY.</h1>),
        "description": (<div><p>MEDAF Green specialises in projects relating to clean, sustainable energy and waste management solutions. This arm recognizes the human obligation to invest in environmentally friendly and sustain- able solutions for our communities. MEDAF plans to use its full re- sources and connections in various industries to acquire, partner with and help discover opportunities to expand the field of sustain- able solutions in the region’s aim for environmental conservation.</p>
            <h2>Services</h2>
            <p>—Waste management —Sustainable Paper manufacturing & recy-
cling, —Mineral oil recycling —Solar energy.</p>
        </div>),
        "image": {
            desktop: DesktopImage5,
            mobile: MobileImage5
        },
        "actions": [
            {
                "text": "read more",
            }
        ],
        'website': {
            'text': '',
            'url': ''
        }
    },
    {
        "id": 5,
        "title": 'Mining & manufacturing',
        "completeTitle": (<h1>MEDAF MINING &<br />MANUFACTURING.</h1>),
        "description": (<div><p>MEDAF’s manufacturing and mining services are also one of our longest-standing industries, working closely with our trading operations. With over a 15- year presence in the market of mining, extraction and trade of minerals and crude oil products, MEDAF has managed mining operations in Egypt and other Afri- can countries through locally established companies. At its peak, MEDAF’s export network reached over 17 countries including the COMESA economic zone, Iraq, Jordan, Chad, Senegal, Benin, Georgia, and Angola.</p>
            <h2>Operations</h2>
            <p>Extraction of rock phosphate, gold, iron and chromium ore and Feldspar, in Egypt.</p>
        </div>),
        "image": {
            desktop: DesktopImage6,
            mobile: MobileImage6
        },
        "actions": [
            {
                "text": "read more",
            }
        ],
        'website': {
            'text': '',
            'url': ''
        }
    },
    {
        "id": 6,
        "title": 'Aviation, tourism & hospitality',
        "completeTitle": (<h1>MEDAF AVIATION, HOSPITALITY & TOURISM INVESTMENTS.</h1>),
        "description": (<div><p>MEDAF’s hospitality and aviation group consists of high- ly-skilled teams that work jointly to offer integrated pack- ages to their clients across Africa, the Middle East, Europe and the Far East. The group offers services for both pas- sengers and cargo, with full-fledged facilities for custom- ers, business partners and government entities. Together with Al Raya’s hotel management arm, Jadara, the group provides a unique business model in the religious tourism sector with a focus on Saudi Arabia’s Haj and Um- raa. We are constantly on the lookout for partnerships, ac- quisitions and investments in airline companies & hotels.</p>
            <h2>Services</h2>
            <p>—Domestic & international passenger flights —Cargo
freight —Hotel management.</p>
        </div>),
        "image": {
            desktop: DesktopImage7,
            mobile: MobileImage7
        },
        "actions": [
            {
                "text": "read more",
            }
        ],
        'website': {
            'text': '',
            'url': ''
        }
    },


    {
        "id": 7,
        "title": 'creatives, education & culture',
        "completeTitle": (<h1>MEDAF CREATIVE, EDUCATION & SPORTS INVESTMENTS.</h1>),
        "description": (<div><p>This group is the creative arm of MEDAF, which aims to provide impactful personal development initiatives in or- der to inspire its surrounding communities. As a group, we provide educational services that encompass both traditional and alternative forms of education, providing curriculums that embolden our entrepreneurial base. We also encourage projects that strengthen the intrin- sic creative and innovative instinct of our society. Our creative services help our clients tell inspiring stories about their brands, get closer to their audience and pro- vide value to their stakeholders.</p>
            <h2>Services</h2>
            <p>—Sports investments & Event management —Athletic talent development —Creative Design (graphic and other) —Content Writing —Corporate Identity Creation —People Branding —Product/Service/Project Branding —Professional Learning & Training —Curriculum and education programmes.</p>
        </div>),
        "image": {
            desktop: DesktopImage8,
            mobile: MobileImage8
        },
        "actions": [
            {
                "text": "read more",
            }
        ],
        'website': {
            'text': '',
            'url': ''
        }
    },

]

export default businessData