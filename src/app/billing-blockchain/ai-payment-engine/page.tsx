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
import CustomCursor from "@/components/common/custom-cursor";
import CtaAreaFour from "@/components/cta/cta-area-4";
import ServiceAreaFour from "@/components/services/service-area-4";
import ServiceAreaSix, {
  ServiceItem,
} from "@/components/services/service-area-6";
import CreativeAgencyWrapper from "@/app/(homes)/creative-agency/_components/creative-agency-wrapper";
import ServiceDetailsApproach from "@/app/(service)/service-details/_components/service-details-approach";
import HeroThree from "@/components/hero/hero-three";

export const metadata: Metadata = {
  title: "Redox - Creative Agency and Portfolio Next js Template",
  description:
    "Redox is a creative agency and portfolio template built with Next.js, designed to showcase your work and services effectively.",
};
const services: ServiceItem[] = [
  {
    number: "(01)",
    title: "Artificial Intelligence",
    services: [
      "Machine learning algorithms optimize energy production, maintenance, and grid interactions.",
    ],
    img: "/assets/imgs/solutions/img1.png",
  },
  {
    number: "(02)",
    title: "Blockchain Security",
    services: [
      "Immutable and transparent energy transaction records using smart contracts.",
    ],
    img: "/assets/imgs/solutions/image.png",
  },
  {
    number: "(03)",
    title: "IoT Integration",
    services: [
      "Real-time sensor data and device connectivity for seamless monitoring.",
    ],
    img: "/assets/imgs/solutions/img3.png",
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
              <HeroThree />
              <ServiceAreaSix
                subtitle="Technology"
                title="Powered by Advanced Technology"
                services={services}
                serviceDetailsLink="/service-details"
              />
              <ActuallyArea p1="How It" p2="Works" />
              <ServiceAreaTwo showBottom={false} />
              <ServiceDetailsApproach
                approachItems={[
                  {
                    number: "01",
                    title: "Always-On Optimization",
                    text: "Your system adjusts itself every minute — based on shifts, machinery cycles, and real-time load behavior. AI extracts maximum output even during variable industrial operations.",
                  },
                  {
                    number: "02",
                    title: "Smart Savings Engine",
                    text: "AI strategically balances solar, grid, and stored power to reduce peak demand charges, improve power-factor efficiency, and boost annual ROI.",
                  },
                  {
                    number: "03",
                    title: "Predictive Care Alerts",
                    text: "Your system proactively alerts you before performance drops — detecting early signs of inverter wear, dust, or equipment strain.",
                  },
                  {
                    number: "04",
                    title: "Real-Time Impact Tracking",
                    text: "Track CO₂ reduction, energy distribution, machine-level efficiency, and your facility’s sustainability contribution — all in real time",
                  },
                  {
                    number: "05",
                    title: "Unified Intelligent Dashboard",
                    text: "All insights — from floor-wise output to system health — live in one clean, enterprise-grade dashboard designed for clarity, precision, and action. ",
                  },
                ]}
                subtitle={"Benefits for Industries & Commercial Spaces"}
                heading="With Suncube AI, your facility runs on automated intelligence — optimizing production-hour loads, reducing wastage, forecasting needs, and transforming raw solar data into effortless insights. Let AI handle complexity, while you experience reliable, efficient, low-maintenance power every single day."
              />
              <ServiceAreaFour />
              <CtaAreaFour
                line1="Upgrade Your"
                line2="Facility with Suncube "
              />
              <FooterTwo />
            </main>
          </div>
        </CreativeAgencyWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
