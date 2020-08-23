import React from "react";

const DesktopImage1 = require("../../assets/images/business/desktop/medaf-business-1.jpg");
const DesktopImage2 = require("../../assets/images/business/desktop/medaf-business-2.jpg");
const DesktopImage3 = require("../../assets/images/business/desktop/medaf-business-3.jpg");
const DesktopImage4 = require("../../assets/images/business/desktop/medaf-business-4.jpg");
const DesktopImage5 = require("../../assets/images/business/desktop/medaf-business-5.jpg");
const DesktopImage6 = require("../../assets/images/business/desktop/medaf-business-6.jpg");
const DesktopImage7 = require("../../assets/images/business/desktop/medaf-business-7.jpg");
const DesktopImage8 = require("../../assets/images/business/desktop/medaf-business-8.jpg");
const MobileImage1 = require("../../assets/images/business/mobile/medaf-business-1.jpg");
const MobileImage2 = require("../../assets/images/business/mobile/medaf-business-2.jpg");
const MobileImage3 = require("../../assets/images/business/mobile/medaf-business-3.jpg");
const MobileImage4 = require("../../assets/images/business/mobile/medaf-business-4.jpg");
const MobileImage5 = require("../../assets/images/business/mobile/medaf-business-5.jpg");
const MobileImage6 = require("../../assets/images/business/mobile/medaf-business-6.jpg");
const MobileImage7 = require("../../assets/images/business/mobile/medaf-business-7.jpg");
const MobileImage8 = require("../../assets/images/business/mobile/medaf-business-8.jpg");

const businessData = [
  {
    id: 0,
    title: <>Finance Services</>,
    completeTitle: (
      <h1>
        MEDAF FINANCE
        <br />
        HOLDING, MFH.
      </h1>
    ),
    description: (
      <div>
        <p>
          MEDAF Finance Holding is the financial arm specialized in non-banking
          financial services. Regulated by the FRA in Egypt, we are
          strategically positioned to enable clients to expand their investment
          returns and participate in the high growth potential of the region. We
          provide a wide array of insights on equity, debt and regional
          investment strategies. Over decades of experience, we have derived
          techniques that have been uniquely tailored to help global investors
          gain access to the region. Our team analyses clients’ assets,
          liabilities and cash flows, defines investment objectives and
          constraints, and then strategically identifies and selects appropriate
          asset allocations, benchmarks and risk management frameworks.
        </p>
        <h2>Services</h2>
        <p>
          Asset management, Custody Services, Securities Brokerage, Investment
          Banking & Advisory, Consumer & Microfinance, Leasing, Factoring, and
          *Securitisation.
        </p>
      </div>
    ),
    image: {
      desktop: DesktopImage1,
      mobile: MobileImage1,
    },
    actions: [
      {
        text: "read more",
      },
    ],
    website: {
      text: "Visit www.medafholding.com",
      url: "https://medafholding.com/",
    },
  },
  {
    id: 1,
    title: (
      <>
        Project
        <br />
        Management
      </>
    ),
    completeTitle: (
      <h1>
        MEDAF PROJECT
        <br />
        MANAGEMENT.
      </h1>
    ),
    description: (
      <div>
        <p>
          Our project management arm is the first point of contact for all
          projects put in motion by MEDAF. Through the dedicated business
          analysis and PMO units, our industry specialists work closely to
          deliver recommendations to MEDAF’s senior leaders and our clients on
          fulfilling projects.
        </p>
        <h2>Services</h2>
        <p>
          Project consultancy, Technical Feasibility studies, and Project
          planning.
        </p>
      </div>
    ),
    image: {
      desktop: DesktopImage2,
      mobile: MobileImage2,
    },
    actions: [
      {
        text: "read more",
      },
    ],
    website: {
      text: "",
      url: "",
    },
  },
  {
    id: 2,
    title: <>Technology</>,
    completeTitle: (
      <h1>NEW SMART EGYPT FOR PROGRAMMING TECHNOLOGIES, PROTECH.</h1>
    ),
    description: (
      <div>
        <p>
          Protech offers a wide array of solutions in technological innovation.
          With automation on the rise, and technological advancements gaining
          exponential momentum, our solutions are tailored to cost-effectively
          support the needs of emerging markets. Each of our businesses helps
          our clients’ companies gain access to their required digital solutions
          in order to both 1) gain competitive advantage and 2) navigate the
          ever-changing landscape of the technological world.
        </p>
        <h2>Services</h2>
        <p>
          E-payment platforms & applications (closed & open-loop),
          Cyber-security solutions (using AI and machine-learning models)
          Blockchain, Hospitality solutions, IT infrastructure, Full-fledged UI,
          UX & Core back-end solutions, Business intelligence units, and Data
          analytics.
        </p>
      </div>
    ),
    image: {
      desktop: DesktopImage3,
      mobile: MobileImage3,
    },
    actions: [
      {
        text: "read more",
      },
    ],
    website: {
      text: "",
      url: "",
    },
  },
  {
    id: 3,
    title: (
      <>
        Trade, supply chain
        <br />& logistics
      </>
    ),
    completeTitle: (
      <h1>MEDITERRANEAN & AFRICA FOR TRADE AND EXPORT; MATREX.</h1>
    ),
    description: (
      <div>
        <p>
          Our trade and export arm, led by Matrex, is one of MEDAF’s longest
          standing services, with a wide network of trade operations spanning 32
          countries across the globe. Matrex had pioneered the export of
          Egyptian Bitumen, and the import, export and local supply of food
          products, including meat, dairy, frozen vegetables and vegetable oils.
          Through the most recent establishment of its dedicated trade unit
          operating between London and Cairo, Matrex has strengthened its trade
          operations to include a more wholly integrated set of services.
        </p>
        <p>
          Import and export, supply chain management such as sea-freight and air
          cargo, as well as the handling of customs & clearance for products
          such as Grains, agricultural crops & produce, beef, Egyptian cotton,
          precious metals, minerals, chemicals, and oil & natural gas.
        </p>
        <strong>
          <em style={{ color: "#be1e2d" }}>Covid-19</em> crisis items (e.g.
          hand-sanitizers, face masks, and gloves)
        </strong>
      </div>
    ),
    image: {
      desktop: DesktopImage4,
      mobile: MobileImage4,
    },
    actions: [
      {
        text: "read more",
      },
    ],
    website: {
      text: "",
      url: "",
    },
  },
  {
    id: 4,
    title: (
      <>
        Green Tech. &<br />
        sustainable energy
      </>
    ),
    completeTitle: <h1>MEDAF GREEN TECHNOLOGY & RENEWABLE ENERGY.</h1>,
    description: (
      <div>
        <p>
          MEDAF Green specialises in projects relating to clean, sustainable
          energy and waste management solutions. This arm recognizes the human
          obligation to invest in environmentally friendly and sustainable
          solutions for our communities. MEDAF plans to use its full resources
          and connections in various industries to acquire, partner with and
          help discover opportunities to expand the field of sustainable
          solutions in the region’s aim for environmental conservation.
        </p>
        <h2>Services</h2>
        <p>
          Waste management, Sustainable Paper manufacturing & recycling, Mineral
          oil recycling, and Solar energy.
        </p>
      </div>
    ),
    image: {
      desktop: DesktopImage5,
      mobile: MobileImage5,
    },
    actions: [
      {
        text: "read more",
      },
    ],
    website: {
      text: "",
      url: "",
    },
  },
  {
    id: 5,
    title: (
      <>
        Mining &<br />
        manufacturing
      </>
    ),
    completeTitle: (
      <h1>
        MEDAF MINING &<br />
        MANUFACTURING.
      </h1>
    ),
    description: (
      <div>
        <p>
          MEDAF’s manufacturing and mining services are also one of our
          longest-standing industries, working closely with our trading
          operations. With over a 15 years presence in the market of mining,
          extraction and trade of minerals and crude oil products, MEDAF has
          managed mining operations in Egypt and other African countries through
          locally established companies. At its peak, MEDAF’s export network
          reached over 17 countries including the COMESA economic zone, Iraq,
          Jordan, Chad, Senegal, Benin, Georgia, and Angola.
        </p>
        <h2>Services</h2>
        <p>
          Extraction of rock phosphate, gold, iron and chromium ore and
          Feldspar, in Egypt.
        </p>
      </div>
    ),
    image: {
      desktop: DesktopImage6,
      mobile: MobileImage6,
    },
    actions: [
      {
        text: "read more",
      },
    ],
    website: {
      text: "",
      url: "",
    },
  },
  {
    id: 6,
    title: (
      <>
        Aviation, tourism &<br />
        hospitality
      </>
    ),
    completeTitle: <h1>MEDAF AVIATION, HOSPITALITY & TOURISM INVESTMENTS.</h1>,
    description: (
      <div>
        <p>
          MEDAF’s hospitality and aviation group consists of highly-skilled
          teams that work jointly to offer integrated packages to their clients
          across Africa, the Middle East, Europe and the Far East. The group
          offers services for both passengers and cargo, with full-fledged
          facilities for customers, business partners and government entities.
          Together with Al Raya’s hotel management arm, Jadara, the group
          provides a unique business model in the religious tourism sector with
          a focus on Saudi Arabia’s Haj and Umraa. We are constantly on the
          lookout for partnerships, acquisitions and investments in airline
          companies & hotels.
        </p>
        <h2>Services</h2>
        <p>
          Domestic & international passenger flights, and Cargo freight, and
          Hotel management.
        </p>
      </div>
    ),
    image: {
      desktop: DesktopImage7,
      mobile: MobileImage7,
    },
    actions: [
      {
        text: "read more",
      },
    ],
    website: {
      text: "",
      url: "",
    },
  },

  {
    id: 7,
    title: (
      <>
        creatives, education
        <br />& culture
      </>
    ),
    completeTitle: <h1>MEDAF CREATIVE and EDUCATION.</h1>,
    description: (
      <div>
        <p>
          This group is the creative arm of MEDAF, which aims to provide
          impactful personal development initiatives in order to inspire its
          surrounding communities. As a group, we provide educational services
          that encompass both traditional and alternative forms of education,
          providing curriculums that embolden our entrepreneurial base. We also
          encourage projects that strengthen the intrinsic creative and
          innovative instinct of our society. Our creative services help our
          clients tell inspiring stories about their brands, get closer to their
          audience and provide value to their stakeholders.
        </p>
        <h2>Services</h2>
        <p>
          Creative Design (graphic and other), Content Writing, Corporate
          Identity Creation, People Branding, Product/Service/Project Branding,
          Professional Learning & Training, and Curriculum & education
          programmes.
        </p>
      </div>
    ),
    image: {
      desktop: DesktopImage8,
      mobile: MobileImage8,
    },
    actions: [
      {
        text: "read more",
      },
    ],
    website: {
      text: "",
      url: "",
    },
  },
];

export default businessData;
