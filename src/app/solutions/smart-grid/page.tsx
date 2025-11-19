import MarketingAgencyWrapper from "@/app/(homes)/marketing-agency/_components/marketing-agency-wrapper";
import ServiceDetailsApproach from "@/app/(service)/service-details/_components/service-details-approach";
import defaultShape from "@/assets/imgs/shape/shape-13.webp";
import gridImg from "@/assets/imgs/solutions/img13.png";
import ApproachAboutArea from "@/components/approach/approach-about-area";
import CurtainBasedImage from "@/components/common/curtain-image";
import CustomCursor from "@/components/common/custom-cursor";
import CtaAreaFour from "@/components/cta/cta-area-4";
import FunFactAreaTwo from "@/components/fun-fact/fun-fact-area-2";
import HeroThree from "@/components/hero/hero-three";
import ServiceAreaSix, {
  ServiceItem,
} from "@/components/services/service-area-6";
import MainWrapper from "@/components/wrapper/main-wrapper";
import Footer from "@/layout/footer/footer-one";
import HeaderTwo from "@/layout/header/header-two";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redox - Marketing Agency and Portfolio Next js Template",
  description:
    "Redox is a marketing agency and portfolio template built with Next.js, designed to showcase your work and services effectively.",
};
const services: ServiceItem[] = [
  {
    number: "(001)",
    title: "Predictive Load Forecasting",
    services: [
      "AI anticipates peak demand, solar variability, EV load surges, and weather shifts to balance the grid before stress occurs.",
    ],
    img: "/assets/imgs/solutions/img5.png",
  },
  {
    number: "(002)",
    title: "Bidirectional Power Routing",
    services: [
      "Automatically moves energy between homes, businesses, storage units, and the grid — ensuring stability with zero wastage.",
    ],
    img: "/assets/imgs/solutions/img6.png",
  },
  {
    number: "(003)",
    title: "Peer-to-Peer Energy Trading",
    services: [
      "Secure blockchain modules enable buying and selling of excess solar with full transparency and automated payment calculation. ",
    ],
    img: "/assets/imgs/solutions/img7.png",
  },
  {
    number: "(004)",
    title: "Grid Stabilization Algorithms",
    services: [
      "Maintains voltage, frequency, and load equilibrium using real-time AI — reducing outages, overloads, and curtailment.",
    ],
    img: "/assets/imgs/solutions/img8.png",
  },
  {
    number: "(005)",
    title: "Unified Distributed Resource Control",
    services: [
      "Connects inverters, smart meters, IoT devices, and batteries into one coordinated VPP with complete oversight.",
    ],
    img: "/assets/imgs/solutions/img9.png",
  },
];
export default function SmartGrid() {
  return (
    <>
      <CustomCursor />
      <HeaderTwo />
      <MainWrapper
        bodyCls={[
          "body-wrapper",
          "dark",
          "body-marketing-agency",
          "font-heading-sequelsans-romanbody",
        ]}
      >
        <MarketingAgencyWrapper>
          <main style={{ marginTop: "70px" }}>
            <HeroThree
              p1="The Grid Is Getting Smarter,"
              p2="And Suncube Leads the Way."
              p3="Smart Grid & Virtual Power Plant"
              buttonText="Book Smart Grid Demo"
              description="Suncube AI links solar, storage, and smart devices into a unified Virtual Power Plant. AI predicts demand, balances energy, and automates trading — making the grid stable and efficient. "
              bottomText="AI-powered energy coordination for homes, businesses, and industries — unified into one intelligent power network. "
            />
            <CurtainBasedImage
              src="/assets/imgs/solutions/img11.png"
              alt="curtain-image"
            />
            <FunFactAreaTwo
              buttonText={"The Challenge"}
              heading="Today’s Grid Wasn’t Built for Tomorrow’s Energy."
              paragraph="Modern grids face unpredictable demand, growing solar adoption, and EV-driven load spikes — causing instability and inefficient energy flow. Traditional systems can’t forecast, balance, or manage decentralized power. Suncube AI fixes this by making the grid adaptive — turning variability into stability through intelligent prediction and coordination. "
              infoText="Grid Reliability You Can Count On AI stabilizes distributed resources, prevents overloads, and keeps the network efficient, responsive, and VPP-ready — around the clock. "
              galleryImage={gridImg}
            />
            <div style={{ marginTop: "40px" }}></div>
            <ServiceAreaSix
              subtitle="The Suncube AI Solution"
              title="The Intelligent Grid Layer Your Energy Network Needed"
              services={services}
              serviceDetailsLink="/service-details"
            />
            <ServiceDetailsApproach
              approachItems={[
                {
                  number: "01",
                  title: "Always-On Optimization",
                  text: "AI continuously monitors grid conditions, distributed resources, and demand patterns — balancing energy dynamically across every connected node. ",
                },
                {
                  number: "02",
                  title: "Smart Savings Engine",
                  text: "Optimizes when to draw, store, trade, or sell energy — increasing ROI for users and reducing operational costs for utilities. ",
                },
                {
                  number: "03",
                  title: "Predictive Care Alerts",
                  text: "AI detects early signs of system strain, abnormal consumption, grid overload risk, or dropping generation — ensuring stability ahead of time. ",
                },
                {
                  number: "04",
                  title: "Real-Time Impact Tracking",
                  text: "See carbon savings, VPP participation, load-balancing performance, energy trades, and grid contribution — all updated live. ",
                },
                {
                  number: "05",
                  title: "Unified Intelligent Dashboard",
                  text: "Manage every asset — solar, batteries, EVs, smart meters, and grid interactions — from one clean, intuitive, enterprise-grade dashboard.",
                },
              ]}
              subtitle={"Benefits for Smart Grids & VPP Networks "}
              heading="Suncube AI makes the grid adaptive — forecasting demand, routing energy intelligently, and unifying decentralized systems into one coordinated power plant. AI handles the complexity so users get seamless, efficient, future-ready energy."
            />
            <ApproachAboutArea
              approachBoxes={[
                {
                  title: ["Connection", "Setup"],
                  shapeImage: defaultShape,
                  list: [
                    "Connect solar, storage & devices to Suncube",
                    "Works with existing meters/inverters",
                    "No hardware upgrades needed ",
                    "Secure VPP onboarding",
                    "Instant activation",
                  ],
                },
                {
                  title: ["Intelligent", "Analysis"],
                  shapeImage: defaultShape,
                  list: [
                    "AI learns demand & generation patterns",
                    "Predicts peak/off-peak shifts",
                    "Understands community energy behavior",
                    "Detects imbalances early",
                    "Builds an optimized grid model",
                  ],
                },
                {
                  title: ["Continuous", "Optimization"],
                  list: [
                    "Balances distributed resources",
                    "Predictive grid stabilization",
                    "Automated energy trading",
                    "Real-time efficiency tuning",
                    "Fully autonomous operation",
                  ],
                },
              ]}
              heading="A Simple Connection. A Smarter Energy Ecosystem. "
            />
            <CtaAreaFour line1="Elevate Your" line2="Grid with Suncube " />
          </main>
          <Footer />
        </MarketingAgencyWrapper>
      </MainWrapper>
    </>
  );
}
