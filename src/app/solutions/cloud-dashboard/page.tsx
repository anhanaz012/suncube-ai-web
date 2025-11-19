import MarketingAgencyWrapper from "@/app/(homes)/marketing-agency/_components/marketing-agency-wrapper";
import ServiceDetailsApproach from "@/app/(service)/service-details/_components/service-details-approach";
import defaultShape from "@/assets/imgs/shape/shape-13.webp";
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
    title: "Centralized Fleet Monitoring",
    services: [
      "View all sites, assets, inverters, panels, and batteries from a single cloud dashboard.",
    ],
    img: "/assets/imgs/solutions/img5.png",
  },
  {
    number: "(002)",
    title: "Cross-Site Performance Comparison",
    services: [
      "Identify your best-performing locations and spot low-yield sites instantly.",
    ],
    img: "/assets/imgs/solutions/img6.png",
  },
  {
    number: "(003)",
    title: "Unified Device Management",
    services: [
      "Manage inverters, meters, sensors, and batteries across every installation from one panel.",
    ],
    img: "/assets/imgs/solutions/img7.png",
  },
  {
    number: "(004)",
    title: "Cloud-Based Alerts & Reports",
    services: [
      "Receive real-time notifications, automated reports, and issue summaries for all sites.",
    ],
    img: "/assets/imgs/solutions/img8.png",
  },
  {
    number: "(005)",
    title: "Scalable Multi-User Access",
    services: [
      "Admins, technicians, and owners get role-based access tailored to their responsibilities.",
    ],
    img: "/assets/imgs/solutions/img9.png",
  },
];

export default function CloudDashboard() {
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
              p1="Your Entire Solar Fleet,"
              p2="Unified Under One Smart Cloud."
              p3="Cloud Dashboard & Multi-Site Management"
              buttonText="Explore Cloud Dashboard"
              description="Suncube AI connects all your installations into one unified command center. Track sites, compare performance, manage devices, and control your entire solar fleet with real-time intelligence."
              bottomText="A cloud dashboard that unifies every site and asset — giving you instant visibility from anywhere"
            />
            <CurtainBasedImage
              src="/assets/imgs/solutions/img11.png"
              alt="curtain-image"
            />
            <FunFactAreaTwo
              buttonText={"The Challenge"}
              uptime="360°"
              infoText="Fleetwide visibility delivered through Suncube’s cloud engine — giving you a complete, real-time view of every site, asset, and performance metric."
              paragraph="Operators juggle scattered portals, missing data, inconsistent reports, and siloed device information. Monitoring dozens of systems manually leads to blind spots, inefficiencies, and delayed actions. Suncube AI fixes this with a unified dashboard that centralizes control, standardizes insights, and brings every site together in one intelligent cloud layer."
              heading="Managing Multiple Solar Sites Shouldn’t Feel This Complicated."
            />
            <div
              style={{
                marginTop: "40px",
              }}
            ></div>
            <ServiceAreaSix
              subtitle="The Suncube AI Solution"
              title="The Intelligent Control Layer Your Solar Network Needed"
              services={services}
              serviceDetailsLink="/service-details"
            />
            <ServiceDetailsApproach
              approachItems={[
                {
                  number: "01",
                  title: "Unified Cloud Onboarding",
                  text: "Connect all your sites and devices to Suncube with automatic detection and instant activation.",
                },
                {
                  number: "02",
                  title: "Intelligent Fleet Overview",
                  text: "See real-time performance, yield trends, alerts, and comparisons across your entire portfolio.",
                },
                {
                  number: "03",
                  title: "Multi-Site Alert Engine",
                  text: "AI highlights anomalies, underperforming sites, and system-wide patterns that need attention.",
                },
                {
                  number: "04",
                  title: "Cross-Location Performance Insights",
                  text: "Track KPIs, view reports, and understand performance behavior across regions and environments.",
                },
                {
                  number: "05",
                  title: "Central Control Dashboard",
                  text: "Manage assets, settings, reports, users, and workflows from one clean, enterprise-grade interface.",
                },
              ]}
              subtitle={"Benefits for Distributed Solar Management"}
              heading="Suncube AI simplifies multi-site operations — giving businesses and operators a single dashboard to monitor, manage, and optimize every connected location with clarity and control"
            />
            <ApproachAboutArea
              heading={"One Cloud View. Unlimited Site Control."}
              approachBoxes={[
                {
                  title: ["Central", "Connection"],
                  shapeImage: defaultShape,
                  list: [
                    "Link all sites to Suncube",
                    "Works with existing hardware",
                    "No local server required",
                    "Secure cloud integration",
                    "Instant multi-site access",
                  ],
                },
                {
                  title: ["Smart", "Oversight"],
                  shapeImage: defaultShape,
                  list: [
                    "AI analyzes every location",
                    "Detects fleet-wide patterns",
                    "Highlights low-yield sites",
                    "Tracks environmental impacts",
                    "Builds a unified performance map",
                  ],
                },
                {
                  title: ["Cloud", "Optimization"],
                  list: [
                    "Standardizes performance",
                    "Automates reports",
                    "Streamlines fleet operations",
                    "Enhances oversight in real time",
                    "Fully autonomous cloud management",
                  ],
                },
              ]}
            />

            <CtaAreaFour line1="Your Entire" line2="Solar Fleet" />
          </main>
        </MarketingAgencyWrapper>
      </MainWrapper>
    </>
  );
}
