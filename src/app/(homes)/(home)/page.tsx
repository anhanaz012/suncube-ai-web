import ServiceDetailsApproach from "@/app/(service)/service-details/_components/service-details-approach";
import AboutOne from "@/components/about/about-one";
import ActuallyArea from "@/components/actually/actually-area";
import CustomCursor from "@/components/common/custom-cursor";
import CtaArea from "@/components/cta/cta-area";
import HeroOne from "@/components/hero/hero-one";
import ProductivityArea from "@/components/productivity/productivity-area";
import ServiceAreaTwo from "@/components/services/service-area-2";
import ServiceAreaThree from "@/components/services/service-area-3";
import TestimonialArea from "@/components/testimonial/testimonial-area";
import VideoBox from "@/components/video/video-box";
import MainWrapper from "@/components/wrapper/main-wrapper";
import Footer from "@/layout/footer/footer-one";
import Header from "@/layout/header/header-one";
import DigitalAgencyWrapper from "./_components/digital-agency-wrapper";

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <MainWrapper
        bodyCls={[
          "body-wrapper",
          "dark",
          "body-digital-agency",
          "font-heading-instrumentsans-medium",
        ]}
      >
        <DigitalAgencyWrapper>
          <main>
            <HeroOne />
            <AboutOne />
            <VideoBox />
            <ActuallyArea />
            <ServiceAreaTwo showBottom = {true}/>
            <ServiceAreaThree />
            <ServiceDetailsApproach />
            <TestimonialArea />
            <ProductivityArea />
            <CtaArea />
            <Footer/>
          </main>
        </DigitalAgencyWrapper>
      </MainWrapper>
    </>
  );
}
