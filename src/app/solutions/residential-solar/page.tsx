import MarketingAgencyWrapper from "@/app/(homes)/marketing-agency/_components/marketing-agency-wrapper";
import ServiceDetailsApproach from "@/app/(service)/service-details/_components/service-details-approach";
import galleryImg from "@/assets/imgs/solutions/img12.png";
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
    number: "(01)",
    title: "Predictive Optimization",
    services: [
      "AI analyzes sunlight patterns, shading, and local weather to adapt output dynamically — making every ray count, even on cloudy days.",
    ],
    img: "/assets/imgs/solutions/img5.png",
  },
  {
    number: "(02)",
    title: "Smart Power Routing",
    services: [
      "Automatically directs energy between your home, storage, and the grid — ensuring zero wastage and total control.",
    ],
    img: "/assets/imgs/solutions/img6.png",
  },
  {
    number: "(03)",
    title: "Predictive Maintenance",
    services: [
      "Detects inefficiencies, dust build-up, or component wear before performance drops — preventing surprises and saving costs",
    ],
    img: "/assets/imgs/solutions/img7.png",
  },
  {
    number: "(04)",
    title: "AI + Blockchain Billing",
    services: [
      "Tracks, audits, and secures your energy trades with automated, tamper-proof precision.",
    ],
    img: "/assets/imgs/solutions/img8.png",
  },
  {
    number: "(05)",
    title: "Sustainability Insights",
    services: [
      "Converts your clean energy data into measurable impact — showing exactly how your home powers a greener planet.",
    ],
    img: "/assets/imgs/solutions/img9.png",
  },
];


export default function ResidentialSolar() {
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
            <HeroThree />
            <CurtainBasedImage
              src="/assets/imgs/solutions/img11.png"
              alt="curtain-image"
            />
            <FunFactAreaTwo
              galleryImage={galleryImg}
              buttonText="The Challenge"
              infoText="Guaranteed System Uptime. AI keeps your solar network running — always. "
              heading="Traditional Solar Stops at Generation. We Don’t."
              uptime="99.9% "
              paragraph="Most home solar systems produce energy — but never think about how they produce it. Shading, dust, weather shifts, and irregular consumption patterns silently cut efficiency. By the time you notice, the savings you expected have already slipped away. Suncube AI changes that — by giving your solar system a brain."
            />
            <div style={{ marginTop: "40px" }}></div>
            <ServiceAreaSix
              subtitle="The Suncube AI Solution"
              title="Your Solar, Supercharged with Intelligence"
              services={services}
              serviceDetailsLink="/service-details"
            />
            <ServiceDetailsApproach />
            <ApproachAboutArea />
            <CtaAreaFour />
          </main>
          <Footer />
        </MarketingAgencyWrapper>
      </MainWrapper>
    </>
  );
}
