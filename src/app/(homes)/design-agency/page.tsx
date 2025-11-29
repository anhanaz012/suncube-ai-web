import { Metadata } from "next";
import MainWrapper from "@/components/wrapper/main-wrapper";
import DesignAgencyWrapper from "./_components/design-agency-wrapper";
import HeaderFour from "@/layout/header/header-four";
import HeroFour from "@/components/hero/hero-four";
import AwardAreaTwo from "@/components/award/award-area-2";
import ServiceAreaFour from "@/components/services/service-area-4";
import CapabilitiesArea from "@/components/capabilities/capabilities-area";
import AboutThree from "@/components/about/about-three";
import AwardAreaThree from "@/components/award/award-area-3";
import FooterThree from "@/layout/footer/footer-three";
import CustomCursor from "@/components/common/custom-cursor";

export const metadata: Metadata = {
  title: "Suncube-AI - Design Agency and Portfolio Next js Template",
  description:
    "Suncube-AI is a design agency and portfolio template built with Next.js, designed to showcase your work and services effectively.",
};

export default function HomeDesignAgencyPage() {
  return (
    <>
      {/* custom cursor start */}
      <CustomCursor />
      {/* custom cursor end */}

      {/* Header area start */}
      <HeaderFour />
      {/* Header area end */}

      {/* Main wrapper start */}
      <MainWrapper
        bodyCls={[
          "body-wrapper",
          "dark",
          "body-design-agency",
          "font-heading-thunder-regular",
        ]}
      >
        <DesignAgencyWrapper>
          <main>

            {/* Hero area start */}
            <HeroFour />
            {/* Hero area end */}

            {/* award area start */}
<<<<<<< HEAD
            {/* <AwardAreaTwo /> */}
=======
            <AwardAreaTwo />
>>>>>>> c684cb6b0ccd4cd31c1810b14f395d143d96d1dd
            {/* award area end */}

            {/* service area start */}
            <ServiceAreaFour />
            {/* service area end */}
<<<<<<< HEAD
           
=======

>>>>>>> c684cb6b0ccd4cd31c1810b14f395d143d96d1dd
            {/* capability area start */}
            <CapabilitiesArea />
            {/* capability area end */}

            {/* about area start */}
            <AboutThree />
            {/* about area end */}

            {/* award area start */}
            <AwardAreaThree />
            {/* award area end */}

          </main>

          {/* Footer area start */}
          <FooterThree />
          {/* Footer area end */}
        </DesignAgencyWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
