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
import ActuallyArea from "@/components/actually/actually-area";
import ServiceAreaTwo from "@/components/services/service-area-2";
import ServiceDetailsApproach from "../(service)/service-details/_components/service-details-approach";
import ServiceAreaThree from "@/components/services/service-area-3";
import AwardAreaTwo from "@/components/award/award-area-2";
import CtaAreaFour from "@/components/cta/cta-area-4";

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
              <HeroTwo
                heading={{
                  part1: "Smart",
                  part2: "Energy",
                  part5: "Real",
                  part6: "Sustainability",
                }}
                infoText="AI makes your solar system more efficient, reliable, and environmentally progressive."
                aboutText="From predictive maintenance to sustainability analytics, SunCube ensures peak generation with minimal waste. You see clearer insights, reduced faults, and real CO₂ offset—turning clean energy into measurable planetary impact."
              />
              <ActuallyArea p1="Technology that Pays" p2="back the Planet" />
              <ServiceAreaTwo
                showBottom={false}
                services={[
                  {
                    number: "001",
                    title: (
                      <>
                        AI-Boosted <br /> Sustainability
                      </>
                    ),
                    text: "AI multiplies the impact of solar by turning clean energy into continuously optimized clean energy. It detects inefficiencies early, ensuring every watt is used wisely. More output, less waste—stronger sustainability.",
                    link: "/features/ai-boosted-sustainability",
                  },
                  {
                    number: "002",
                    title: (
                      <>
                        Real-Time <br /> Clean Performance
                      </>
                    ),
                    text: "Live system monitoring keeps generation stable and uninterrupted. AI instantly flags drops in efficiency or faults for faster fixes. The result: cleaner production with fewer downtime emissions.",
                    link: "/features/real-time-performance",
                  },
                  {
                    number: "003",
                    title: (
                      <>
                        Predictive <br /> Zero-Waste Care
                      </>
                    ),
                    text: "AI forecasts issues before they occur, reducing unnecessary repairs. Panels and inverters stay healthier for longer, minimizing material waste. Smoother operation means higher long-term efficiency and CO₂ savings.",
                    link: "/features/predictive-zero-waste",
                  },
                  {
                    number: "004",
                    title: (
                      <>
                        Eco-Smart <br /> Grid Balance
                      </>
                    ),
                    text: "Dynamic grid interaction stabilizes local energy ecosystems. AI shifts power intelligently based on demand and weather. Communities benefit from a greener, more resilient energy flow.",
                    link: "/features/eco-smart-grid",
                  },
                ]}
              />
              <ServiceDetailsApproach
                approachItems={[
                  {
                    number: "01",
                    title: "AI Energy Analysis",
                    text: "AI interprets live solar production data and system behavior. It identifies true clean-energy output with high accuracy.",
                  },
                  {
                    number: "02",
                    title: "Weather Intelligence",
                    text: "Forecasting models assess sunlight, temperature, and cloud movement. This ensures environmental impact calculations reflect real conditions.",
                  },
                  {
                    number: "03",
                    title: "Carbon Intensity Mapping",
                    text: "The system tracks grid emission levels hour by hour. Clean-energy contribution is measured against actual fossil-fuel displacement.",
                  },
                  {
                    number: "04",
                    title: "Scientific Impact Models",
                    text: "CO₂ reduction and water savings are calculated using verified formulas. Every metric is tied to the energy your system genuinely generates.",
                  },
                  {
                    number: "05",
                    title: "Blockchain Transparency",
                    text: "All sustainability records are stored as immutable blockchain entries. Audit logs verify your environmental impact with complete trust.",
                  },
                ]}
                subtitle="How Suncube Measures Environmental Impact"
                heading="Suncube analyzes every watt of clean energy through AI models that study solar output, weather forecasts, and real-time grid carbon intensity."
              />
              <ServiceAreaSix
                subtitle="Transformation"
                title="How AI Transforms Energy Systems to Deliver Cleaner, Greener Results"
              />
              <ServiceAreaFour
                services={[
                  {
                    number: "01",
                    title: "Future Forecasts",
                    features: [
                      "Predicts upcoming efficiency levels",
                      "Models future sustainability impact",
                      "Uses weather-based performance projections",
                      "Guides long-term carbon planning",
                    ],
                  },
                  {
                    number: "02",
                    title: "Carbon Savings",
                    features: [
                      "Cuts downtime-related carbon loss",
                      "Maintains stable clean generation",
                      "Detects faults before escalation",
                      "Preserves long-term system health",
                    ],
                  },
                  {
                    number: "03",
                    title: "Smart Flow",
                    features: [
                      "Optimizes energy distribution intelligently",
                      "Reduces unnecessary grid emissions",
                      "Balances load during peak demand",
                      "Improves on-grid clean contribution",
                    ],
                  },
                  {
                    number: "04",
                    title: "Proactive Alerts",
                    features: [
                      "Flags micro-faults instantly",
                      "Avoids slow efficiency degradation",
                      "Protects panels from failures",
                      "Extends equipment sustainability lifespan",
                    ],
                  },
                  {
                    number: "05",
                    title: "AI Insights",
                    features: [
                      "Uses predictive performance analytics",
                      "Applies deep anomaly detection",
                      "Automates maintenance forecasting intelligently",
                      "Enhances overall environmental efficiency",
                    ],
                  },
                ]}
              />
              <ServiceAreaThree
                title={
                  <>
                    Trust Through <br />
                    Technology.
                  </>
                }
                description=""
                services={[
                  {
                    img: "/assets/imgs/gallery/img07.jpeg",
                    title: "Immutable Records",
                    text: "Blockchain secures each sustainability event in immutable, verifiable entries.",
                    delay: "0.45",
                  },
                  {
                    img: "/assets/imgs/gallery/img08.jpeg",
                    title: "Full Audit Logs",
                    text: "Every action—alerts, tickets, reports, logins—is recorded for compliance.",
                    delay: "0.60",
                  },
                  {
                    img: "/assets/imgs/gallery/img09.jpeg",
                    title: "Exportable Impact",
                    text: "Suncube generates shareable sustainability histories for corporates and ESG teams.",
                    delay: "0.75",
                  },
                  {
                    img: "/assets/imgs/gallery/img10.jpeg",
                    title: "Secure by Design",
                    text: "End-to-end encryption and global data standards protect all system information.",
                    delay: "0.90",
                  },
                ]}
              />
              <div className="mt-4"></div>
              <ServiceAreaSix
                subtitle="Collective Impact"
                title="Your Solar System Is Part of a Bigger Story"
                services={[
                  {
                    number: "01",
                    title: "Strengthening the Grid",
                    services: [
                      "Distributed solar supports grid balance",
                      "Local generation eases peak demand",
                      "AI-guided flow boosts stability",
                      "Cleaner power fills supply gaps",
                    ],
                    img: "/images/sustainability/grid-stability.jpg",
                  },
                  {
                    number: "02",
                    title: "Reducing Fossil Dependence",
                    services: [
                      "Every home contributes clean power",
                      "Collective output replaces fossil load",
                      "AI minimizes downtime emissions",
                      "Sunpower communities shift energy mix",
                    ],
                    img: "/images/sustainability/fossil-reduction.jpg",
                  },
                  {
                    number: "03",
                    title: "Cleaner Local Communities",
                    services: [
                      "Better solar health ensures purity",
                      "Prevented faults cut carbon waste",
                      "Optimized systems run cleaner",
                      "Reliable generation empowers neighborhoods",
                    ],
                    img: "/images/sustainability/clean-communities.jpg",
                  },
                  {
                    number: "04",
                    title: "Shaping Global Policy",
                    services: [
                      "AI reveals solar behavior patterns",
                      "Forecasting supports climate planning",
                      "Usage trends guide green policies",
                      "Real data informs global strategies",
                    ],
                    img: "/images/sustainability/policy-planning.jpg",
                  },
                ]}
                serviceDetailsLink="/service-details"
              />

              {/* <ServiceAreaFour /> */}
              <ServiceAreaSix
                subtitle="Technology"
                title="Powered by Advanced Technology"
              />
              <ServiceAreaFour
                services={[
                  {
                    number: "01",
                    title: "Future Forecasts",
                    features: [
                      "Predicts upcoming efficiency levels",
                      "Models future sustainability impact",
                      "Uses weather-based performance projections",
                      "Guides long-term carbon planning",
                    ],
                  },
                  {
                    number: "02",
                    title: "Carbon Savings",
                    features: [
                      "Cuts downtime-related carbon loss",
                      "Maintains stable clean generation",
                      "Detects faults before escalation",
                      "Preserves long-term system health",
                    ],
                  },
                  {
                    number: "03",
                    title: "Smart Flow",
                    features: [
                      "Optimizes energy distribution intelligently",
                      "Reduces unnecessary grid emissions",
                      "Balances load during peak demand",
                      "Improves on-grid clean contribution",
                    ],
                  },
                  {
                    number: "04",
                    title: "Proactive Alerts",
                    features: [
                      "Flags micro-faults instantly",
                      "Avoids slow efficiency degradation",
                      "Protects panels from failures",
                      "Extends equipment sustainability lifespan",
                    ],
                  },
                  {
                    number: "05",
                    title: "AI Insights",
                    features: [
                      "Uses predictive performance analytics",
                      "Applies deep anomaly detection",
                      "Automates maintenance forecasting intelligently",
                      "Enhances overall environmental efficiency",
                    ],
                  },
                ]}
              />
              <AwardAreaTwo
                label="Enterprise"
                featuredWorks={[
                  {
                    title: "Exportable Sustainability Reports",
                    tag: "Enterprise ESG — Ready",
                    image:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8aCBImZqIOZl3gye-iCc7chNegWYZExWPng&s",
                    marginTop: false,
                  },
                  {
                    title: "Blockchain-Backed Traceability",
                    tag: "Tamper-Proof Records — 2025",
                    image:
                      "https://images.pexels.com/photos/358255/pexels-photo-358255.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    marginTop: true,
                  },
                  {
                    title: "Audit-Ready Data Integrity",
                    tag: "Compliance Standards — Global",
                    image:
                      "https://images.pexels.com/photos/19923062/pexels-photo-19923062/free-photo-of-empty-road-in-countryside.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    marginTop: false,
                  },
                  {
                    title: "AI-Powered Impact Modelling",
                    tag: "Future Accuracy — Assured",
                    image:
                      "https://media.istockphoto.com/id/499365702/photo/sunny-road.jpg?s=612x612&w=0&k=20&c=OkI6yNOp-fINgfkH8FumOWfUUydKAooZzNTYmvanFwM=",
                    marginTop: false,
                  },
                ]}
              />
              <CtaAreaFour line1="Let's modernize" line2="your energy ops" />
              <Footer />
            </main>
          </div>
        </CreativeAgencyWrapper>
      </MainWrapper>
    </>
  );
}
