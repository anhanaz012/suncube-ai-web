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
    title: (
      <>
        Transparent <br /> Energy Records
      </>
    ),
    text: "Blockchain creates a single, tamper-proof record of every energy unit produced or sold, eliminating manual logging errors and ensuring every transaction remains visible, accurate, and fully traceable.",
  },
  {
    number: "002",
    title: (
      <>
        Fraud-Proof <br /> Billing
      </>
    ),
    text: "Smart contracts automate tariff-based billing with real-time accuracy. Dynamic grid rates are applied instantly and consistently, removing human involvement, reducing disputes, and ensuring trustworthy settlements.",
  },
  {
    number: "003",
    title: (
      <>
        Audit-Ready <br /> Energy Data
      </>
    ),
    text: "Every transaction is cryptographically signed and time-stamped, providing a verifiable audit trail ideal for compliance, reporting, and long-term energy performance validation.",
  },
  {
    number: "004",
    title: (
      <>
        Trusted Grid <br /> Collaboration
      </>
    ),
    text: "Blockchain ensures both users and grid operators see identical transaction logs. With unified, immutable records, coordination becomes faster, clearer, and free from data disputes or mismatched calculations.",
  },
];

const DEFAULT_SERVICES: Service[] = [
  {
    number: "01",
    title: "Enterprise Cryptography",
    features: [
      "256-bit data encryption",
      "Multi-signature validation",
      "Secure transaction hashing",
      "Anti-spoofing protection",
    ],
  },
  {
    number: "02",
    title: "End-to-End Shielding",
    features: [
      "Encrypted client-server flow",
      "Protected inverter telemetry",
      "Secure grid API channels",
      "Zero interception risk",
    ],
  },
  {
    number: "03",
    title: "Audit & Compliance Logs",
    features: [
      "Every action time-stamped",
      "Admin-only visibility",
      "Exportable audit records",
      "Regulatory-ready trails",
    ],
  },
  {
    number: "04",
    title: "Zero-Tamper Architecture",
    features: [
      "Immutable system actions",
      "No hidden modifications",
      "Protected state changes",
      "Continuous integrity checks",
    ],
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
    title: "Data Security",
    features: [
      "GDPR compliant",
      "CCPA ready",
      "Encrypted storage",
      "User privacy control",
    ],
  },
  {
    number: "02",
    title: "High Availability",
    features: [
      "99.9% uptime SLA",
      "Fault-tolerant design",
      "Real-time recovery",
      "Scalable cloud setup",
    ],
  },
  {
    number: "03",
    title: "Secure API Integration",
    features: [
      "Safe grid interaction",
      "Encrypted API channels",
      "Verified data exchange",
      "Protected communication flow",
    ],
  },
];

const services: ServiceItem[] = [
  {
    number: "(01)",
    title: "Admin Access",
    services: [
      "Full log visibility",
      "Manage all transactions",
      "Export system reports",
      "Configure user roles",
      "Oversight of all sites",
    ],
    img: "/assets/imgs/solutions/img5.png",
  },
  {
    number: "(02)",
    title: "Technician Access",
    services: [
      "View assigned tickets only",
      "Access device diagnostics",
      "No billing visibility",
      "Update service status",
      "Upload issue reports",
    ],
    img: "/assets/imgs/solutions/img6.png",
  },
  {
    number: "(03)",
    title: "Customer Access",
    services: [
      "View personal transaction history",
      "Track their own energy data",
      "No grid-level insights",
      "No cross-site visibility",
      "Secure private dashboard",
    ],
    img: "/assets/imgs/solutions/img7.png",
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
                p1="Energy Transactions"
                p2="Secured by Blockchain"
                p3="Blockchain-Secured"
                bottomText="Built for transparent, tamper-proof solar billing."
                description="Our blockchain engine secures every energy transaction end-to-end. Immutable logs prevent data tampering, while smart contracts automate settlements using AI-verified output. Cryptographic signing protects billing and blocks any unauthorized changes."
                buttonText="Explore Blockchain Demo"
              />
              <ActuallyArea p1="Why Blockchain" p2="for Solar Billing?" />
              <ServiceAreaTwo showBottom={false} services={defaultServices} />
              <ServiceDetailsApproach
                approachItems={[
                  {
                    number: "01",
                    title: "Immutable Records",
                    text: "Every energy sale is written to an unchangeable ledger, ensuring tamper-proof logs that eliminate errors, manipulation, or billing disputes. All events remain permanently stored and fully traceable.",
                  },
                  {
                    number: "02",
                    title: "Smart-Contract Automation",
                    text: "Billing rules execute instantly through smart contracts, removing intermediaries and guaranteeing on-time settlements. Tariffs and payment triggers run automatically with no manual checks.",
                  },
                  {
                    number: "03",
                    title: "Real-Time Verification",
                    text: "Transactions are validated the moment energy is produced or sold, allowing grid operators to trust live data without reconciliation delays. Every sale event is logged with accurate timestamps.",
                  },
                  {
                    number: "04",
                    title: "Our core blockchain features",
                    text: "A distributed ledger protects all activity from corruption or unauthorized changes, enabling peer-to-grid and peer-to-peer readiness. No single authority can alter records, ensuring long-term transparency.",
                  },
                ]}
                steps="04"
                subtitle={"Our AI-powered billing workflow"}
                heading="Built to secure every solar transaction with tamper-proof records, automated billing logic, and real-time verification trusted by both users and grid operators."
              />
              <ServiceAreaSix
                subtitle="SECURITY"
                title="The protections that keep our platform uncompromised"
                serviceDetailsLink="/service-details"
              />
              <ServiceAreaFour services={DEFAULT_SERVICES} />
              {/* <PageTitle title="Preview" /> */}
              {/* <PortfolioThreeWorkArea /> */}
              <div style={{ marginTop: "40px" }}></div>
              <ServiceAreaSix
                subtitle="The Suncube AI Solution"
                title="Permission levels built for trust"
                services={services}
                serviceDetailsLink="/service-details"
              />
              <WorkAreaEight/>
              <WorkAreaSix/>
              <div style={{marginTop:"40px"}}></div>
              <ServiceAreaSix
                subtitle="SYSTEM COMPLIANCE"
                title="Compliance built for global standards."
                serviceDetailsLink="/service-details"
              />
              <ServiceAreaFour services={updatedServices} />
              <CtaAreaFour line1="Let's secure" line2="your billing" />
              <Footer />
            </main>
          </div>
        </CreativeAgencyWrapper>
      </MainWrapper>
    </>
  );
}