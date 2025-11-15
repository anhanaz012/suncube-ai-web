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

export const metadata: Metadata = {
  title: "Redox - Marketing Agency and Portfolio Next js Template",
  description:
    "Redox is a marketing agency and portfolio template built with Next.js, designed to showcase your work and services effectively.",
};

export default function CommercialSolar() {
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
              p1="Powering Industries,"
              p2="With Intelligence Built In."
              p3="Industrial & Commercial Solar "
              buttonText="Get Smart Industrial Plan"
              description="Transform your facility into an intelligent energy ecosystem. Suncube AI elevates industrial and commercial solar from passive power generation to active, adaptive, automated management. With real-time analytics, operational forecasting, and machine-level optimization, your system continuously fine-tunes energy flow for maximum efficiency. Your solar doesn’t just run — it learns, predicts, and enhances performance across every floor and every shift. "
              bottomText="AI-driven energy built for factories, warehouses, and commercial complexes. Smarter operations, lower costs, and cleaner power — round the clock."
            />
            <ParallaxImgTwo />
            <FunFactAreaTwo buttonText={"The Challenge"} />
            <ServiceAreaFive
              heading="Your Facility’s Solar, Upgraded with Intelligence "
              description="Suncube AI doesn’t just monitor energy — it interprets it. Our adaptive system learns from your machinery cycles, building patterns, shift timings, and weather forecasts to deliver maximum output with minimal waste. Every unit is optimized, audited, and accounted for — without manual effort. Here’s how intelligence transforms your industrial energy flow: "
              services={[
                {
                  id: "10",
                  number: "(001)",
                  title: "Predictive Optimization ",
                  text: "AI analyzes sunlight availability, machinery cycles, and environmental conditions to ensure consistent output even during fluctuating operational loads.",
                  image: "/assets/imgs/solutions/img5.png",
                  link: "/solutions/commercial-solar",
                },
                {
                  id: "11",
                  number: "(002)",
                  title: "Smart Power Routing ",
                  text: "Automatically directs solar between production floors, HVAC, storage systems, and the grid — ensuring uninterrupted operations with zero wastage.",
                  image: "/assets/imgs/solutions/img6.png",
                  link: "/solutions/commercial-solar",
                },
                {
                  id: "12",
                  number: "(003)",
                  title: "Predictive Maintenance",
                  text: "Identifies inverter strain, panel degradation, dust build-up, and equipment inefficiencies before they impact production or power quality.",
                  image: "/assets/imgs/solutions/img7.png",
                  link: "/solutions/commercial-solar",
                },
                {
                  id: "13",
                  number: "(004)",
                  title: "AI + Blockchain Billing",
                  text: "Tracks exported power, grid transactions, and energy credits with tamper-proof, automated billing — built for audit-ready corporate compliance. ",
                  image: "/assets/imgs/solutions/img8.png",
                  link: "/solutions/commercial-solar",
                },
                {
                  id: "14",
                  number: "(005)",
                  title: "Sustainability Insights",
                  text: "Converts your energy data into measurable environmental impact — supporting ESG reporting, certifications, and regulatory compliance. ",
                  image: "/assets/imgs/solutions/img9.png",
                  link: "/solutions/commercial-solar",
                },
              ]}
            />
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
            <ApproachAboutArea
              approachBoxes={[
                {
                  title: ["Connection", "Setup"],
                  shapeImage: defaultShape,
                  list: [
                    "Connect your system to Suncube AI ",
                    "No extra hardware needed ",
                    "Works with all commercial inverters/meters ",
                    "Secure onboarding ",
                    "Instant plug-and-play activation ",
                  ],
                },
                {
                  title: ["Intelligent", "Analysis"],
                  shapeImage: defaultShape,
                  list: [
                    "AI learns load cycles & facility behavior ",
                    "Reads sunlight, weather & peak hours",
                    "Understands operational patterns ",
                    "Spots inefficiencies automatically ",
                    "Builds a custom optimization model",
                  ],
                },
                {
                  title: ["Continuous", "Optimization"],
                  list: [
                    "Auto-optimizes power routing ",
                    "Predictive maintenance built-in ",
                    "Real-time performance insights",
                    "Smart savings recommendations",
                    "Fully autonomous in the background ",
                  ],
                },
              ]}
            />
            <CtaAreaFour line1="Upgrade Your" line2="Facility with Suncube " />
          </main>
          <Footer />
        </MarketingAgencyWrapper>
      </MainWrapper>
    </>
  );
}
