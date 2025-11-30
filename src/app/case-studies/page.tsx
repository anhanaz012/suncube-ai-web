import CreativeAgencyWrapper from "@/app/(homes)/creative-agency/_components/creative-agency-wrapper";
import shape from "@/assets/imgs/shape/shape-9.webp";
import ActuallyArea from "@/components/actually/actually-area";
import CustomCursor from "@/components/common/custom-cursor";
import CtaAreaFour from "@/components/cta/cta-area-4";
import HeroTwo from "@/components/hero/hero-two";
import ServiceAreaTwo from "@/components/services/service-area-2";
import ServiceAreaThree from "@/components/services/service-area-3";
import ServiceAreaFour from "@/components/services/service-area-4";
import ServiceAreaSix, {
  ServiceItem,
} from "@/components/services/service-area-6";
import TestimonialArea from "@/components/testimonial/testimonial-area";
import MainWrapper from "@/components/wrapper/main-wrapper";
import Footer from "@/layout/footer/footer-one";
import HeaderTwo from "@/layout/header/header-two";
import { Metadata } from "next";
import Image from "next/image";
import ServiceDetailsApproach from "../(service)/service-details/_components/service-details-approach";
import AboutTwo from "@/components/about/about-two";
import ParallaxCarousel from "@/components/portfolio-slider/parallax-carousel";

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
  const impactStories = [
    {
      text: `“Predictive alerts caught faults early and cut our downtime dramatically.”`,
      name: "Commercial Customer",
      post: "Predictive Diagnostics",
      icon: "/assets/imgs/icon/icon-3.webp",
      light: false,
    },
    {
      text: `“AI monitoring gave us instant transparency on panel health and energy flow.”`,
      name: "Residential User",
      post: "Real-Time Intelligence",
      icon: "/assets/imgs/icon/icon-3-light.webp",
      light: true,
    },
    {
      text: `“Blockchain-backed energy logs made our reporting and payments effortless.”`,
      name: "Industrial Facility",
      post: "Blockchain Transparency",
      icon: "/assets/imgs/icon/icon-3.webp",
      light: false,
    },
    {
      text: `“Dynamic load balancing stabilized our grid and boosted overall efficiency.”`,
      name: "Utility Operator",
      post: "Grid Optimization",
      icon: "/assets/imgs/icon/icon-3.webp",
      light: false,
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
                  part1: "Solar",
                  part2: "Wins",
                  part5: "Made",
                  part6: "by AI",
                }}
                infoText="See how AI-enhanced solar systems deliver higher uptime, cleaner energy, and measurable performance gains."
                aboutText="These real deployments showcase how homes, businesses, and communities elevate solar performance using AI monitoring, predictive maintenance, grid-aware optimization, and blockchain-secured energy records."
              />
              <ServiceAreaSix
                subtitle="Segments"
                title="Explore Case Studies Across Every Solar Environment"
              />
              <ServiceAreaFour
                services={[
                  {
                    number: "01",
                    title: "Residential",
                    features: [
                      "AI-based monitoring for daily performance",
                      "Predictive maintenance to avoid outages",
                      "Optimized energy savings through smart insights",
                      "Real-time alerts with inverter health tracking",
                    ],
                  },
                  {
                    number: "02",
                    title: "Commercial",
                    features: [
                      "Downtime reduction with automated fault detection",
                      "Efficiency optimization using advanced analytics",
                      "Ticket automation for fast technician assignment",
                      "Energy reporting with usage and savings metrics",
                    ],
                  },
                  {
                    number: "03",
                    title: "Industrial / Utility",
                    features: [
                      "Large-scale grid interaction with dynamic control",
                      "AI-driven power distribution during peak demand",
                      "Blockchain-secured trading and audit records",
                      "Fleet-wide visibility with predictive maintenance",
                    ],
                  },
                ]}
              />
              <AboutTwo />
              <ParallaxCarousel />
              <ServiceAreaSix
                subtitle="Smart • Predictive • Proven"
                title="How Suncube AI Creates Results"
                services={[
                  {
                    number: "01",
                    title: "Real-Time Intelligence",
                    services: [
                      "Tracks output at panel level",
                      "Monitors inverter health live",
                      "Adapts to weather shifts instantly",
                      "Detects faults and error codes",
                      "Analyzes historical performance data",
                    ],
                    img: "/images/case-studies/realtime.jpg",
                  },
                  {
                    number: "02",
                    title: "Predictive Maintenance",
                    services: [
                      "Prevents failures before they occur",
                      "Creates automated preventive tickets",
                      "Routes technicians intelligently",
                      "Improves service turnaround speed",
                      "Reduces system downtime significantly",
                    ],
                    img: "/images/case-studies/predictive.jpg",
                  },
                  {
                    number: "03",
                    title: "Dynamic Power Distribution",
                    services: [
                      "Balances load across the system",
                      "Forecasts grid demand accurately",
                      "Optimizes on-grid/off-grid flow",
                      "Maximizes revenue from surplus",
                      "Enhances grid stability in real time",
                    ],
                    img: "/images/case-studies/distribution.jpg",
                  },
                  {
                    number: "04",
                    title: "Blockchain Transparency",
                    services: [
                      "Stores immutable trade records",
                      "Uses smart contracts for security",
                      "Ensures transparent energy logs",
                      "Enables accurate payment calculations",
                      "Strengthens trust with all stakeholders",
                    ],
                    img: "/images/case-studies/blockchain.jpg",
                  },
                ]}
                serviceDetailsLink="/service-details"
              />

              <ServiceDetailsApproach
                steps="04"
                subtitle="Trust"
                heading="Why Our Case Studies Matter"
                approachItems={[
                  {
                    number: "01",
                    title: "Real-Time Data",
                    text: "Every insight comes directly from live inverter streams, panel-level tracking, and performance logs. No manual inputs, no estimations—only verified operational data.",
                  },
                  {
                    number: "02",
                    title: "AI-Verified Insights",
                    text: "All anomalies, faults, and efficiency gains are identified by AI models. Results are automatically detected, classified, and recorded without human intervention.",
                  },
                  {
                    number: "03",
                    title: "Blockchain Records",
                    text: "Energy trades, billing events, and generation logs are stored on immutable ledgers. Case study evidence is secured, tamper-proof, and fully auditable.",
                  },
                  {
                    number: "04",
                    title: "Customer Dashboards",
                    text: "Every metric shown is mirrored in customer dashboards—energy output, uptime, alerts, savings, and service history—ensuring transparent, trustable validation.",
                  },
                  {
                    number: "05",
                    title: "Audit-Ready Data",
                    text: "System-wide audit logs track every ticket, report, and configuration change. Enterprises and consultants can verify all records with complete traceability.",
                  },
                ]}
              />

              <TestimonialArea
                testimonials={impactStories}
                title="Where Suncube Technology Meets Industry Outcomes"
              />
              <CtaAreaFour line1="See How" line2="Suncube Works" />
              <Footer />
            </main>
          </div>
        </CreativeAgencyWrapper>
      </MainWrapper>
    </>
  );
}