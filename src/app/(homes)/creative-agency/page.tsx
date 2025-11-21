import { Metadata } from "next";
import Image from "next/image";
import HeaderTwo from "@/layout/header/header-two";
import MainWrapper from "@/components/wrapper/main-wrapper";
import CreativeAgencyWrapper from "./_components/creative-agency-wrapper";
import HeroTwo from "@/components/hero/hero-two";
import AboutTwo from "@/components/about/about-two";
import WorkAreaTwo from "@/components/work/work-area-2";
import ActuallyArea from "@/components/actually/actually-area";
import ServiceAreaTwo from "@/components/services/service-area-2";
import TestimonialArea from "@/components/testimonial/testimonial-area";
import ClientSliderTwo from "@/components/client/client-area-2";
import AwardArea from "@/components/award/award-area";
import TeamArea from "@/components/team/team-area";
import CtaAreaTwo from "@/components/cta/cta-area-2";
// import FooterTwo from "@/layout/footer/footer-two";
import shape from "@/assets/imgs/shape/shape-9.webp";
// import shape_2 from "@/assets/imgs/shape/shape-09.svg";
import CustomCursor from "@/components/common/custom-cursor";
import Footer from "@/layout/footer/footer-one";

export const metadata: Metadata = {
  title: "Suncube-AI - Creative Agency and Portfolio Next js Template",
  description:
    "Suncube-AI is a creative agency and portfolio template built with Next.js, designed to showcase your work and services effectively.",
};

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
              <HeroTwo />
              <AboutTwo />
              <WorkAreaTwo />
              <ActuallyArea />
              <ServiceAreaTwo />
              <TestimonialArea />
              <ClientSliderTwo />
              <div className="mb--1">
                <div className="circular-shape-wrapper">
                  <div className="shape-thumb">
                    {/* <Image src={shape_2} alt="image" /> */}
                  </div>
                </div>
              </div>
              <AwardArea />
              <TeamArea />
              <CtaAreaTwo />
            </main>
            <Footer />
          </div>
        </CreativeAgencyWrapper>
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
