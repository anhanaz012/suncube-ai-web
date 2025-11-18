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
import defaultShape from "@/assets/imgs/shape/shape-13.webp";
import HeaderTwo from "@/layout/header/header-two";
import { Metadata } from "next";
import CurtainBasedImage from "@/components/common/curtain-image";

export const metadata: Metadata = {
  title: "Redox - Marketing Agency and Portfolio Next js Template",
  description:
    "Redox is a marketing agency and portfolio template built with Next.js, designed to showcase your work and services effectively.",
};

export default function DataInsights() {
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
            <HeroThree
              p1="Your Energy Tells a Story,"
              p2="And Suncube Helps You See It."
              p3="Data Insights & Weather Forecasting"
              buttonText="Explore Energy Insights"
              description="Suncube AI transforms raw data into live insights. It predicts sunlight patterns, models generation curves, and highlights opportunities — helping you make smarter, data-led energy decisions."
              bottomText="AI analytics that reveal trends, forecast generation, and give you clear insight into every watt."
            />
            <CurtainBasedImage
              src="/assets/imgs/solutions/img11.png"
              alt="curtain-image"
            />

            <FunFactAreaTwo
              buttonText={"The Challenge"}
              infoText="Accuracy delivered through Suncube AI’s weather models that predict performance shifts long before conditions change."
              paragraph="Most systems only show basic numbers — leaving owners blind to performance losses, weather risks, and missing energy potential. Without predictive insights, decisions become reactive and inefficient. Suncube AI changes that by turning complex data into clarity — giving you forecasts, trends, and opportunities before they matter."
              uptime="98.7%"
              heading="Solar Data Exists, But It’s Rarely Truly Understood."
            />
            <ServiceAreaFive
              heading="The Insight Engine Your Solar Always Needed"
              description="Suncube AI analyzes generation patterns, sunlight availability, temperature effects, and consumption behavior in real time. It forecasts output, highlights inefficiencies, and reveals trends that guide better energy planning. Here’s how intelligence turns data into real, measurable performance:"
              services={[
                {
                  id: "10",
                  number: "(001)",
                  title: "Advanced Yield Forecasting",
                  text: "AI predicts solar output using weather patterns, irradiation trends, and real-time environmental changes.",
                  image: "/assets/imgs/solutions/img5.png",
                  link: "/solutions/commercial-solar",
                },
                {
                  id: "11",
                  number: "(002)",
                  title: "Performance Trend Analysis",
                  text: "Identifies long-term behavior, daily cycles, seasonal variations, and hidden yield losses.",
                  image: "/assets/imgs/solutions/img6.png",
                  link: "/solutions/commercial-solar",
                },
                {
                  id: "12",
                  number: "(003)",
                  title: "Weather Impact Modeling",
                  text: "Simulates cloudy days, heatwaves, and shading effects to show how conditions affect generation.",
                  image: "/assets/imgs/solutions/img7.png",
                  link: "/solutions/commercial-solar",
                },
                {
                  id: "13",
                  number: "(004)",
                  title: "Loss Factor Detection",
                  text: "Highlights inefficiencies caused by dirt, heat, wiring issues, aging panels, or system mismatch.",
                  image: "/assets/imgs/solutions/img8.png",
                  link: "/solutions/commercial-solar",
                },
                {
                  id: "14",
                  number: "(005)",
                  title: "Unified Insight Dashboard",
                  text: "All metrics, trends, forecasts, and sustainability stats in one clean, intelligent interface built for clarity.",
                  image: "/assets/imgs/solutions/img9.png",
                  link: "/solutions/commercial-solar",
                },
              ]}
            />
            <ServiceDetailsApproach
              approachItems={[
                {
                  number: "01",
                  title: "Real-Time Data Monitoring",
                  text: "AI tracks generation, consumption, sunlight, and efficiency — giving you a complete, live overview of system behavior.",
                },
                {
                  number: "02",
                  title: "Forecasting Intelligence Engine",
                  text: "Predicts energy for the next hour, day, and week using weather models and historical patterns.",
                },
                {
                  number: "03",
                  title: "Impact & Loss Detection",
                  text: "Identifies shading losses, heat drop-offs, dirt impact, evening dips, and weather-driven fluctuations",
                },
                {
                  number: "04",
                  title: "Live Insight Dashboard",
                  text: "View trends, performance curves, reports, and sustainability stats — updated moment by moment.",
                },
                {
                  number: "05",
                  title: "Unified Data Control Panel",
                  text: "Manage all insights, forecasts, alerts, and recommendations from one modern, intuitive analytics hub.",
                },
              ]}
              subtitle={"Benefits for Solar Owners & Energy Networks"}
              heading="Suncube AI makes energy insight effortless — forecasting generation, revealing performance trends, and helping users make smarter decisions backed by real data."
            />
            <ApproachAboutArea
              approachBoxes={[
                {
                  title: ["Data", "Collection"],
                  shapeImage: defaultShape,
                  list: [
                    "Connect system metrics to Suncube",
                    "Works with existing devices",
                    "No extra hardware required",
                    "Automatic data syncing",
                    "Full visibility from day one",
                  ],
                },
                {
                  title: ["Insight", "Analysis"],
                  shapeImage: defaultShape,
                  list: [
                    "AI processes real-time data",
                    "Forecasts short-term and long-term output",
                    "Detects deviations early",
                    "Models weather-driven behavior",
                    "Creates actionable recommendations",
                  ],
                },
                {
                  title: ["Predictive", "Forecasting"],
                  list: [
                    "Predicts generation accurately",
                    "Highlights performance risks",
                    "Weather-adjusted projections",
                    "Efficiency tuning suggestions",
                    "Fully autonomous insight engine",
                  ],
                },
              ]}
              heading="A Clear View. A Smarter Energy Future."
            />
            <CtaAreaFour line1="Forecast Smarter" line2="With Suncube AI" />
          </main>
          <Footer />
        </MarketingAgencyWrapper>
      </MainWrapper>
    </>
  );
}
