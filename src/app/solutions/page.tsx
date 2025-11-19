import shape from "@/assets/imgs/shape/shape-9.webp";
import HeroTwo from "@/components/hero/hero-two";
import MainWrapper from "@/components/wrapper/main-wrapper";
import HeaderTwo from "@/layout/header/header-two";
import { Metadata } from "next";
import Image from "next/image";
import CreativeAgencyWrapper from "@/app/(homes)/creative-agency/_components/creative-agency-wrapper";
import CustomCursor from "@/components/common/custom-cursor";
import ServiceAreaFour from "@/components/services/service-area-4";
import ServiceAreaSix, {
  ServiceItem,
} from "@/components/services/service-area-6";
import Footer from "@/layout/footer/footer-one";

export const metadata: Metadata = {
  title: "Suncube AI - Solar Energy Management",
  description:
    "We’re an AI-powered solar intelligence platform helping enterprises monitor, predict, and optimize their energy generation — transforming sunlight into smarter profits.",
};

export default function HomeCreativeAgencyPage() {
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
              <ServiceAreaFour />
              <ServiceAreaSix
                subtitle="Technology"
                title="Powered by Advanced Technology"
                services={services}
                serviceDetailsLink="/service-details"
              />
              <Footer />
            </main>
          </div>
        </CreativeAgencyWrapper>
      </MainWrapper>
    </>
  );
}
