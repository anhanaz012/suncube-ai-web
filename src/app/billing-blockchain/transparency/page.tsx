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
import WorkAreaEight from "@/components/work/work-area-8";
import WorkAreaSix from "@/components/work/work-area-6";

export const metadata: Metadata = {
  title: "Suncube-AI - Creative Agency and Portfolio Next js Template",
  description:
    "Suncube-AI is a creative agency and portfolio template built with Next.js, designed to showcase your work and services effectively.",
};
const defaultServices = [
  {
    number: "001",
    title: <>Inefficiencies</>,
    text: "Manual systems hide performance drops, incorrect readings, and undetected faults. Suncube tracks every panel and inverter in real time so no issue stays invisible.",
  },
  {
    number: "002",
    title: <>Billing Errors</>,
    text: "Mismatched tariffs, unclear payout calculations, and frequent billing disputes are common. Suncube uses AI + blockchain to calculate every unit accurately and transparently.",
  },
  {
    number: "003",
    title: <>Revenue Gaps</>,
    text: "Traditional tools fail to show clear revenue breakdowns or unit-wise earnings. Suncube provides clean, role-based dashboards with precise, real-time financial visibility.",
  },
  {
    number: "004",
    title: <>Broken Reporting</>,
    text: "Faulty logs and incomplete reports destroy trust. Suncube ensures every action—generation, consumption, sale—is logged immutably with blockchain-backed audit trails.",
  },
];

const DEFAULT_SERVICES: Service[] = [
  {
    number: "01",
    title: "Permanent Records",
    features: [
      "Immutable entries",
      "No edits, no overwrites",
      "Tamper-proof storage",
      "Panel-to-grid tracking",
      "Complete transaction trail",
    ],
  },
  {
    number: "02",
    title: "Verified Transactions",
    features: [
      "Blockchain validation",
      "Smart-contract checks",
      "Unit-wise sale proof",
      "Timestamp accuracy",
      "Grid-synced verification",
    ],
  },
  {
    number: "03",
    title: "Audit Ready",
    features: [
      "Exportable history",
      "Multi-role access",
      "Trustable evidence",
      "Error-free tracking",
      "Compliance-friendly data",
    ],
  },
  {
    number: "04",
    title: "Multi-Party Trust",
    features: ["Customer ↔ Grid ↔ Admin", "Shared transparency"],
  },
  {
    number: "05",
    title: "Secure Access Control",
    features: [
      "Role-based permissions",
      "MFA login support",
      "Encrypted user sessions",
      "Strict privilege isolation",
    ],
  },
  {
    number: "06",
    title: "Blockchain-Backed Ledger",
    features: [
      "Permanent transaction history",
      "Anti-fraud safeguards",
      "Verified billing events",
      "Immutable energy records",
    ],
  },
];

const updatedServices: Service[] = [
  {
    number: "01",
    title: "Full Log History",
    features: [
      "Complete event timeline",
      "Every action recorded",
      "Immutable data trail",
      "Error-free reporting",
      "Compliance-ready tracking",
    ],
  },
  {
    number: "02",
    title: "User Action Trails",
    features: [
      "Who did what, when",
      "Detailed access logs",
      "Role-based visibility",
      "Secure audit mapping",
      "Protected user history",
    ],
  },
  {
    number: "03",
    title: "Export & Verify",
    features: [
      "CSV/PDF log export",
      "Integrity verification",
      "Encrypted datasets",
      "Trusted compliance flow",
      "Multi-party validation",
    ],
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
                p1="AI-driven logs,"
                p2="built for every user."
                p3="Transparency"
                bottomText="From generation to billing—every action is tracked in real time."
                description="AI monitors every unit your system generates. Blockchain secures each transaction with immutable, auditable records. Every role—customer, technician, admin—gets clear, real-time reporting with nothing hidden."
                buttonText="Get Started"
              />
              <ActuallyArea
                p1="Why transparency matters"
                p2="in solar billing & monitoring?"
              />
              <ServiceAreaTwo showBottom={false} services={defaultServices} />
              <WorkAreaEight />
              <WorkAreaSix />
              <ServiceDetailsApproach
                approachItems={[
                  {
                    number: "01",
                    title: "Daily & Monthly Reports",
                    text: "Get clear daily summaries, monthly savings insights, and historical comparisons for production, consumption, and revenue.",
                  },
                  {
                    number: "02",
                    title: "Performance Analytics",
                    text: "Track efficiency trends, anomaly patterns, inverter behavior, and system health across time with detailed analytics.",
                  },
                  {
                    number: "03",
                    title: "Exportable Logs",
                    text: "Download CSV/PDF reports, error logs, billing records, and transaction histories with timestamped entries.",
                  },
                  {
                    number: "04",
                    title: "Multi-Site Reporting",
                    text: "Admins get consolidated views across all sites—individual dashboards, combined performance, and smart forecasting.",
                  },
                ]}
                steps="04"
                subtitle={"Advanced reporting & analytics"}
                heading="Your energy data deserves clarity. Suncube delivers sharp reporting, real-time analytics, and insights that help every user make smarter decisions."
              />

              <ServiceAreaSix
                subtitle="TRANSPARENCY"
                title="Immutable blockchain transparency"
                serviceDetailsLink="/service-details"
              />
              <ServiceAreaFour services={DEFAULT_SERVICES} />
              <div style={{ marginTop: "40px" }}></div>
              <WorkAreaEight
                title={
                  <>
                    Real time insights,
                    <br /> with live
                    <br /> verifiable data.
                  </>
                }
                infoList={["Production", "Sales", "Inverter", "Billing"]}
                description="We deliver a transparent view of your solar system—updated every second. Live production data, real-time sales, instant billing, and continuous inverter health tracking keep every user informed without delay."
              />
              <WorkAreaSix />
              <div style={{ marginTop: "40px" }}></div>
              <ServiceAreaSix
                subtitle="COMPLIANCE"
                title="Transparency that stands up to audits, compliance checks,and security requirements."
                serviceDetailsLink="/service-details"
              />
              <ServiceAreaFour services={updatedServices} />
              <CtaAreaFour line1="Book Your" line2="Real-time Insights" />
              <Footer />
            </main>
          </div>
        </CreativeAgencyWrapper>
      </MainWrapper>
    </>
  );
}
