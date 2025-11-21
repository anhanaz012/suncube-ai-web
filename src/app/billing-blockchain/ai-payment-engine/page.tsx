import shape from "@/assets/imgs/shape/shape-9.webp";
import ActuallyArea from "@/components/actually/actually-area";
import ServiceAreaTwo from "@/components/services/service-area-2";
import MainWrapper from "@/components/wrapper/main-wrapper";
import FooterTwo from "@/layout/footer/footer-two";
import HeaderTwo from "@/layout/header/header-two";
import { Metadata } from "next";
import Image from "next/image";
// import shape_2 from "@/assets/imgs/shape/shape-09.svg";
import CreativeAgencyWrapper from "@/app/(homes)/creative-agency/_components/creative-agency-wrapper";
import PortfolioThreeWorkArea from "@/app/(portfolio)/portfolio-3/_components/portfolio-three-area";
import ServiceDetailsApproach from "@/app/(service)/service-details/_components/service-details-approach";
import CustomCursor from "@/components/common/custom-cursor";
import PageTitle from "@/components/common/page-title";
import CtaAreaFour from "@/components/cta/cta-area-4";
import HeroThree from "@/components/hero/hero-three";
import ServiceAreaThree from "@/components/services/service-area-3";
import ServiceAreaFour, { Service } from "@/components/services/service-area-4";
import ServiceAreaSix, {
  ServiceItem,
} from "@/components/services/service-area-6";
import Footer from "@/layout/footer/footer-one";

export const metadata: Metadata = {
  title: "Suncube-AI - Creative Agency and Portfolio Next js Template",
  description:
    "Suncube-AI is a creative agency and portfolio template built with Next.js, designed to showcase your work and services effectively.",
};
const defaultServices = [
  {
    number: "001",
    title: (
      <>
        Billing <br /> Complexity
      </>
    ),
    text: "Our solar generation varies every hour, and manual billing cannot reliably track shifting units, changing prices, or daily fluctuations.",
  },
  {
    number: "002",
    title: (
      <>
        AI for <br /> Accuracy
      </>
    ),
    text: "AI reads live production data, calculates units instantly, and applies the right tariff every time — removing human errors completely.",
  },
  {
    number: "003",
    title: (
      <>
        Dynamic <br /> Tarrifs
      </>
    ),
    text: "Solar energy sells at rates that change with time, demand, and grid rules. AI handles these variables and ensures every sale is accurate.",
  },
  {
    number: "004",
    title: (
      <>
        Missing <br /> Visibility
      </>
    ),
    text: "Operators struggle without clear logs of units sold, timestamps, or payout data. AI brings real-time tracking and transparent billing.",
  },
];
const DEFAULT_SERVICES: Service[] = [
  {
    number: "01",
    title: "Live Tracking",
    features: [
      "Continuous energy monitoring",
      "Event-level sale timestamps",
      "Anomaly detection on data",
      "Panel-to-grid flow logging",
    ],
  },
  {
    number: "02",
    title: "Smart Tariffs",
    features: [
      "Hourly tariff syncing",
      "Auto recalculation on updates",
      "Seasonal & TOU models",
      "Grid charge adjustment",
    ],
  },
  {
    number: "03",
    title: "AI Forecasting",
    features: [
      "Predictive revenue insights",
      "Best-time sell suggestions",
      "Profit-maximizing guidance",
      "Smart usage vs sell tips",
    ],
  },
  {
    number: "04",
    title: "Auto Billing",
    features: [
      "Instant invoice creation",
      "Smart-contract payouts",
      "Zero manual work needed",
      "Seamless reconciliation",
    ],
  },
  {
    number: "05",
    title: "Billing Reports",
    features: [
      "Daily/weekly summaries",
      "Downloadable statements",
      "Multi-site aggregation",
      "Transparent revenue logs",
    ],
  },
  {
    number: "06",
    title: "Secure Ledger",
    features: [
      "Immutable sale history",
      "Anti-fraud protection",
      "Verified audit trails",
      "Blockchain-backed entries",
    ],
  },
];
const updatedServices: Service[] = [
  {
    number: "01",
    title: "Customer Benefits",
    features: [
      "Clear revenue tracking",
      "No calculation errors",
      "Real-time transparency",
      "Instant billing updates",
    ],
  },
  {
    number: "02",
    title: "Technician Benefits",
    features: [
      "Fewer billing disputes",
      "Easy revenue tracking",
      "No manual reporting",
      "Automated data sync",
    ],
  },
  {
    number: "03",
    title: "Admin Benefits",
    features: [
      "Automated settlements",
      "Immutable blockchain logs",
      "Full system visibility",
      "Multi-site monitoring",
    ],
  },
];
const services: ServiceItem[] = [
  {
    number: "(01)",
    title: "Data Security",
    services: [
      "256-bit encrypted storage",
      "Encrypted API communication",
      "Secure data exchange",
      "Cryptographic energy logs",
      "Fraud-safe data pipeline",
    ],
    img: "/assets/imgs/solutions/img5.png",
  },
  {
    number: "(02)",
    title: "Role Control",
    services: [
      "Role-based system access",
      "Admin / Tech / User rights",
      "Permission-gated features",
      "Secure login enforcement",
      "Controlled data visibility",
    ],
    img: "/assets/imgs/solutions/img6.png",
  },
  {
    number: "(03)",
    title: "Smart Ledger",
    services: [
      "Smart-contract validation",
      "Immutable blockchain entries",
      "Audit-ready activity logs",
      "Anti-fraud verification",
      "Automated transaction checks",
    ],
    img: "/assets/imgs/solutions/img7.png",
  },
];

const services3 = [
  {
    img: "/assets/imgs/gallery/image-13.webp",
    title: "Grid APIs",
    text: "Our engine connects directly with utility and operator APIs, enabling synchronized energy data and live tariff updates for accurate billing.",
    delay: "0.45",
  },
  {
    img: "/assets/imgs/gallery/image-14.webp",
    title: "Universal Inverters",
    text: "Compatible with all major inverter brands, our system reads performance data, sale units, and event logs without extra hardware changes.",
    delay: "0.60",
  },
  {
    img: "/assets/imgs/gallery/image-15.webp",
    title: "Cloud System",
    text: "Built on scalable cloud infrastructure, Suncube manages high-volume sites, real-time updates, and multi-device access effortlessly.",
    delay: "0.75",
  },
  {
    img: "/assets/imgs/gallery/image-16.webp",
    title: "Easy Data Export",
    text: "Export billing and energy data in CSV, Excel, or Webhooks formats, enabling smooth integration with ERPs, accounting tools, and external dashboards.",
    delay: "0.90",
  },
];
export default function HomeCreativeAgencyPage() {
  return (
    <>
      <CustomCursor />
      <HeaderTwo />
      <MainWrapper
        bodyCls={[
          "body-wrapper",
          "dark",
          "body-creative-agency",
          "font-heading-sequelsans-romanbody",
        ]}
      >
        <CreativeAgencyWrapper>
          <div>
            <div className="body-bg">
              <div className="container large">
                <Image src={shape} alt="image" />
                <Image src={shape} alt="image" />
              </div>
            </div>
            <main>
              <HeroThree
                p1="AI–powered billing"
                p2="engine for solar revenue"
                p3="Real-time payments"
                bottomText="SUNCUBE AI automates your entire billing flow"
                description="From on-grid to hybrid systems,we optimize revenue instantly"
                buttonText="Get Started"
              />
              <ActuallyArea p1="Why accurate billing" p2="needs AI today" />
              <ServiceAreaTwo showBottom={false} services={defaultServices} />
              <ServiceDetailsApproach
                approachItems={[
                  {
                    number: "01",
                    title: "Data Tracking",
                    text: "AI captures every kWh sold with exact timestamps, tracing energy from panel to inverter to grid, ensuring no unit or event is missed.",
                  },
                  {
                    number: "02",
                    title: "Smart Calculations",
                    text: "Dynamic tariffs are applied instantly, estimating revenue in real time and computing invoices, including grid service fees automatically.",
                  },
                  {
                    number: "03",
                    title: "Auto Billing",
                    text: "Invoices are generated automatically, payouts can trigger through smart contracts, and grid-facing billing APIs sync all financial actions.",
                  },
                  {
                    number: "04",
                    title: "Chain Verify",
                    text: "Blockchain stores every transaction in immutable logs, enabling automated reconciliation and transparent audit-ready billing records.",
                  },
                ]}
                steps="04"
                subtitle={"Our AI-powered billing workflow"}
                heading="AI handles the entire billing lifecycle — from precise tracking to automated payouts — ensuring every sale is recorded, calculated, and verified with complete accuracy and transparency."
              />
              <ServiceAreaSix
                subtitle="Features"
                title="The features that make our AI engine different"
                serviceDetailsLink="/service-details"
              />
              <ServiceAreaFour services={DEFAULT_SERVICES} />
              <PageTitle title="Preview" />
              <PortfolioThreeWorkArea />
              <div style={{ marginTop: "40px" }}></div>
              <ServiceAreaSix
                subtitle="The Suncube AI Solution"
                title="Advanced security compliance"
                services={services}
                serviceDetailsLink="/service-details"
              />
              <ServiceAreaThree
                title={
                  <>
                    Seamless system <br />
                    Integration support
                  </>
                }
                services={services3}
                buttonText="Know More"
                description=""
              />
              <ServiceAreaSix
                subtitle="Benefits"
                title="Benefits that power every solar stakeholder"
                serviceDetailsLink="/service-details"
              />
              <ServiceAreaFour services={updatedServices} />
              <CtaAreaFour line1="Let's modernize" line2="your energy ops" />
              <Footer />
            </main>
          </div>
        </CreativeAgencyWrapper>
      </MainWrapper>
    </>
  );
}