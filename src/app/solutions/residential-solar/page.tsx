import MarketingAgencyWrapper from "@/app/(homes)/marketing-agency/_components/marketing-agency-wrapper";
import ServiceDetailsApproach from "@/app/(service)/service-details/_components/service-details-approach";
import ApproachAboutArea from "@/components/approach/approach-about-area";
import CustomCursor from "@/components/common/custom-cursor";
import CtaAreaFour from "@/components/cta/cta-area-4";
import FunFactAreaTwo from "@/components/fun-fact/fun-fact-area-2";
import HeroThree from "@/components/hero/hero-three";
import ParallaxImgTwo from "@/components/parallax-img/parallax-img-2";
import ServiceAreaFive from "@/components/services/service-area-5";
import MainWrapper from "@/components/wrapper/main-wrapper";
import Footer from "@/layout/footer/footer-one";
import HeaderTwo from "@/layout/header/header-two";
import galleryImg from "@/assets/imgs/solutions/img12.png"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redox - Marketing Agency and Portfolio Next js Template",
  description:
    "Redox is a marketing agency and portfolio template built with Next.js, designed to showcase your work and services effectively.",
};

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
            <ParallaxImgTwo />
            <FunFactAreaTwo
            galleryImage={galleryImg}
              buttonText="The Challenge"
              infoText="Guaranteed System Uptime. AI keeps your solar network running — always. "
              heading="Traditional Solar Stops at Generation. We Don’t."
              uptime="99.9% "
              paragraph="Most home solar systems produce energy — but never think about how they produce it. Shading, dust, weather shifts, and irregular consumption patterns silently cut efficiency. By the time you notice, the savings you expected have already slipped away. Suncube AI changes that — by giving your solar system a brain."
            />
            <ServiceAreaFive />
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