import shape from "@/assets/imgs/shape/shape-9.webp";
import ActuallyArea from "@/components/actually/actually-area";
import HeroTwo from "@/components/hero/hero-two";
import ServiceAreaTwo from "@/components/services/service-area-2";
import MainWrapper from "@/components/wrapper/main-wrapper";
import FooterTwo from "@/layout/footer/footer-two";
import HeaderTwo from "@/layout/header/header-two";
import { Metadata } from "next";
import Image from "next/image";
// import shape_2 from "@/assets/imgs/shape/shape-09.svg";
import shape_2 from "@/assets/imgs/shape/shape-7.webp";
import img from "@/assets/imgs/gallery/img1.jpeg";
import CustomCursor from "@/components/common/custom-cursor";
import CtaAreaFour from "@/components/cta/cta-area-4";
import ServiceAreaFour from "@/components/services/service-area-4";
import ServiceAreaSix, {
  ServiceItem,
} from "@/components/services/service-area-6";
import CreativeAgencyWrapper from "../(homes)/creative-agency/_components/creative-agency-wrapper";
import ServiceDetailsApproach from "../(service)/service-details/_components/service-details-approach";

export const metadata: Metadata = {
  title: "Redox - Creative Agency and Portfolio Next js Template",
  description:
    "Redox is a creative agency and portfolio template built with Next.js, designed to showcase your work and services effectively.",
};
const services: ServiceItem[] = [
  {
    number: "(01)",
    title: "AI Payment Engine",
    services: [
      "Automated Tariff Calculations",
      "Real-Time Unit Tracking",
      "Smart Invoicing Workflow",
      "Accuracy Across All Sites",
      "Instant Payout Estimates",
    ],
    img: "/assets/imgs/solutions/img1.png",
  },
  {
    number: "(02)",
    title: "Blockchain Security",
    services: [
      "Immutable Energy Records",
      "Encrypted Transaction Logs",
      "Fraud-Proof Data Layer",
      "Smart Contract Automation",
      "Tamper-Safe Audit Trails",
    ],
    img: "/assets/imgs/solutions/image.png",
  },
  {
    number: "(03)",
    title: "Transparency & Reporting",
    services: [
      "Clear Billing Summaries",
      "Exportable Energy Reports",
      "Multi-Site Usage Insights",
      "Automated Monthly Breakdowns",
      "Stakeholders-Ready Dashboards",
    ],
    img: "/assets/imgs/solutions/img3.png",
  },
];
const defaultServices = [
  {
    number: "001 — Track",
    title: (
      <>
        Track Energy <br /> Data
      </>
    ),
    text: "Our AI monitors every watt you generate, logs units sold, and timestamps each transaction for precise and continuous tracking.",
  },
  {
    number: "002 — Calculate",
    title: (
      <>
        Calculate your <br /> payments
      </>
    ),
    text: "Dynamic tariffs are applied automatically as energy flows, producing accurate invoices without manual checks or repeated calculations.",
  },
  {
    number: "003 — Secure",
    title: (
      <>
        Secure Every <br /> Record
      </>
    ),
    text: "Blockchain stores all energy trades in immutable form, ensuring every entry is protected, verifiable, and impossible to alter.",
  },
  {
    number: "004 — Verify",
    title: (
      <>
        Verify in <br /> Real Time
      </>
    ),
    text: "Your billing Energy logs, and payouts remain fully transparent, updated instantly and accessible anytime for complete clarity.",
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
              {/* <HeroTwo /> */}
              <HeroTwo
                heading={{
                  part1: "Smart",
                  part2: "Billing &",
                  part3Img: shape_2,
                  part4Img: img,
                  part5: "Blockchain",
                  part6: "Security",
                }}
                infoText="AI-powered billing accuracy with secure, immutable blockchain records."
                aboutText="Suncube AI delivers transparent billing, tamper-proof energy transactions, automated tariff calculations, and a security layer engineered for high-scale solar operations."
                heroImage="https://www.example.com/your-image.jpg"
              />

              <ServiceAreaSix
                subtitle="Features"
                title="We simplify solar billing with intelligent, secure tech"
                services={services}
                serviceDetailsLink="/service-details"
              />
              <ActuallyArea p1="How Our Billing" p2="System Actually Works" />
              <ServiceAreaTwo showBottom={false} services={defaultServices} />
              <ServiceDetailsApproach
                approachItems={[
                  {
                    number: "01",
                    title: "Immutable Records",
                    text: "Blockchain locks every energy transaction into a tamper-proof ledger, ensuring no unit sold can ever be altered or erased.",
                  },
                  {
                    number: "02",
                    title: "Fraud-Proof Billing",
                    text: "Your payments are protected by cryptographic verification, preventing mismatched readings, manual edits, or billing disputes.",
                  },
                  {
                    number: "03",
                    title: "Transparent Tracking",
                    text: "Every stakeholder sees the same verified data—energy units, timestamps, and payouts—bringing total clarity to the billing process.",
                  },
                  {
                    number: "04",
                    title: "Secure Smart Contracts",
                    text: "Automated contracts manage payouts, tariffs, and validations, reducing delays while ensuring rules are executed exactly as defined.",
                  },
                ]}
                subtitle={"Why blockchain matters for energy"}
                heading="Blockchain ensures every unit of energy is recorded, verified, and secured with absolute trust—creating a billing system that’s transparent, reliable, and impossible to manipulate."
              />
              <ServiceAreaSix
                subtitle={"Security & Compliance"}
                title="We secure every transaction with enterprise-grade protection"
                showServices={false}
              />
              <ServiceAreaFour />
              <CtaAreaFour line1="Let's simplify" line2="your billing now" />
              <FooterTwo />
            </main>
          </div>
        </CreativeAgencyWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
