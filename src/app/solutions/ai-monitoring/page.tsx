import MarketingAgencyWrapper from "@/app/(homes)/marketing-agency/_components/marketing-agency-wrapper";
import ServiceDetailsApproach from "@/app/(service)/service-details/_components/service-details-approach";
import defaultShape from "@/assets/imgs/shape/shape-13.webp";
import gridImg from "@/assets/imgs/solutions/img11.png";
import ApproachAboutArea from "@/components/approach/approach-about-area";
import CurtainBasedImage from "@/components/common/curtain-image";
import CustomCursor from "@/components/common/custom-cursor";
import CtaAreaFour from "@/components/cta/cta-area-4";
import FunFactAreaTwo from "@/components/fun-fact/fun-fact-area-2";
import HeroThree from "@/components/hero/hero-three";
import ServiceAreaFive from "@/components/services/service-area-5";
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
    title: "Real-Time Health Diagnostics",
    services: [
      "AI evaluates panel output, inverter temperature, voltage irregularities, and performance deviations with second-by-second precision. ",
    ],
    img: "/assets/imgs/solutions/img5.png",
  },
  {
    number: "(002)",
    title: "Predictive Failure Forecasting",
    services: [
      "Machine learning predicts cleaning needs, inverter faults, shading impacts, and component wear before they become critical.",
    ],
    img: "/assets/imgs/solutions/img6.png",
  },
  {
    number: "(003)",
    title: "Automated Fault Detection",
    services: [
      "Instant anomaly alerts for wiring issues, overheating, low yield, grid interruptions, and unexpected consumption patterns.",
    ],
    img: "/assets/imgs/solutions/img7.png",
  },
  {
    number: "(004)",
    title: "AI-Guided Maintenance Routing",
    services: [
      "Smart workflows auto-create service tickets, assign technicians, and accelerate resolution with accurate fault data. ",
    ],
    img: "/assets/imgs/solutions/img8.png",
  },
  {
    number: "(005)",
    title: "Unified Performance Oversight",
    services: [
      "Every asset—solar, batteries, inverters, sensors—is monitored under a single intelligent dashboard with complete transparency. ",
    ],
    img: "/assets/imgs/solutions/img9.png",
  },
];

export default function AIMonitoring() {
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
              p1="Your Solar Never Sleeps,"
              p2="And Suncube Keeps it healthy"
              p3="AI Monitoring & Predictive Maintenance"
              buttonText="Explore Monitoring Features"
              description="Suncube AI analyzes every panel, inverter, and battery in real time. It detects anomalies, predicts breakdowns, and automates maintenance — ensuring uninterrupted power and maximum energy yield."
              bottomText="AI-driven diagnostics that monitor solar health, predict failures, and keep your system performing at peak efficiency — automatically."
            />
            <CurtainBasedImage
              src="/assets/imgs/solutions/img11.png"
              alt="curtain-image"
            />

            <FunFactAreaTwo
              buttonText={"The Challenge"}
              heading="Solar Performance Drops Long Before They’re Noticed."
              paragraph="Dust, heat, shading, wiring faults, and inverter issues silently reduce solar output. Manual checks miss early warning signs, causing inefficiency, downtime, and financial loss. Suncube AI eliminates blind spots — predicting failures before they occur and ensuring your system stays healthy, stable, and always performing at its best."
              infoText="Uptime achieved through Suncube AI’s predictive alerts that stop issues before they disrupt performance."
              galleryImage={gridImg}
            />
            <div style={{ marginTop: "40px" }}></div>
            <ServiceAreaSix
              subtitle="The Suncube AI Solution"
              title="The Intelligent Monitoring Layer Your Solar System Needed"
              services={services}
              serviceDetailsLink="/service-details"
            />
            <ServiceDetailsApproach
              approachItems={[
                {
                  number: "01",
                  title: "Continuous System Scanning",
                  text: "AI constantly monitors panels, inverters, and batteries — detecting performance shifts the moment they occur",
                },
                {
                  number: "02",
                  title: "Efficiency Optimization Engine",
                  text: "Improves energy yield by tuning performance, spotting inefficiencies, and recommending actions that boost output.",
                },
                {
                  number: "03",
                  title: "Predictive Care Alerts",
                  text: "AI identifies dust buildup, inverter stress, wiring anomalies, weather-driven fluctuations, and early-stage degradation. ",
                },
                {
                  number: "04",
                  title: "Real-Time Performance Insights",
                  text: "Track health scores, energy trends, downtime prevention, environmental impact, and maintenance logs — updated live.",
                },
                {
                  number: "05",
                  title: "Unified Monitoring Dashboard",
                  text: "Visualize every metric, alert, device, and trend in one clean, smart, enterprise-ready dashboard built for clarity and control.",
                },
              ]}
              subtitle={"Benefits for Solar Owners & Energy Networks"}
              heading="Suncube AI makes solar proactive — predicting failures early and automating maintenance so your system stays reliable, efficient, and interruption-free"
            />
            <ApproachAboutArea
              approachBoxes={[
                {
                  title: ["Live", "Monitoring"],
                  shapeImage: defaultShape,
                  list: [
                    "Connect panels, inverters & batteries to Suncube",
                    "Works with existing hardware",
                    "No rewiring or replacements",
                    "Automatic device detection",
                    "Instant health overview",
                  ],
                },
                {
                  title: ["Intelligent", "Analysis"],
                  shapeImage: defaultShape,
                  list: [
                    "AI tracks real-time solar behavior",
                    "Predicts upcoming failures",
                    "Detects low yield & anomalies",
                    "Weather-based performance modeling",
                    "Builds a health map for all assets",
                  ],
                },
                {
                  title: ["Predictive", "Optimization"],
                  list: [
                    "Prevents breakdowns early",
                    "Smart maintenance scheduling",
                    "Automated fault alerts",
                    "Performance tuning in real time",
                    "Fully autonomous health protection",
                  ],
                },
              ]}
              heading="A Simple Connection. A Smarter Energy Ecosystem. "
            />
            <CtaAreaFour line1="Stay Ahead" line2="With Suncube AI" />
          </main>
          <Footer />
        </MarketingAgencyWrapper>
      </MainWrapper>
    </>
  );
}
