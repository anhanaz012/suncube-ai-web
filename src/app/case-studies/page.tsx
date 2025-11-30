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
      text: `“In large rooftop installations, Suncube’s AI detected subtle inverter irregularities hours before visible failure. Installers reported drastically fewer on-site breakdowns as predictive alerts and automated ticket routing kept systems stable without emergency visits.”`,
      name: "Suncube × Installers",
      post: "AI-Driven Reliability Story",
      icon: "/assets/imgs/icon/icon-3.webp",
      light: false,
    },
    {
      text: `“Energy consultants adopted Suncube’s blockchain-secured logs to create fully traceable audit trails. Reports that once required manual verification were now automated, immutable, and compliance-ready—streamlining sustainability assessments across commercial portfolios.”`,
      name: "Suncube × Consultants",
      post: "Blockchain Compliance Story",
      icon: "/assets/imgs/icon/icon-3-light.webp",
      light: true,
    },
    {
      text: `“EPC teams leveraged Suncube’s predictive maintenance engine to understand failure patterns before dispatching technicians. Field service frequency dropped significantly as AI flagged dust accumulation, voltage drops, and panel faults well in advance.”`,
      name: "Suncube × EPC Companies",
      post: "Predictive Maintenance Story",
      icon: "/assets/imgs/icon/icon-3.webp",
      light: false,
    },
    {
      text: `“System integrators embedded Suncube’s APIs into smart-building dashboards to merge solar production, inverter health, and load-balancing data. Real-time insights powered automated energy routing inside BMS platforms without rewriting existing infrastructure.”`,
      name: "Suncube × Integrators",
      post: "API Integration Story",
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
                subtitle="Partners"
                title="Choose the Path That Fits Your Business"
              />
              <ServiceAreaFour
                services={[
                  {
                    number: "01",
                    title: "Integration Partner",
                    features: [
                      "Integrate Suncube APIs into platforms",
                      "Enable load balancing and grid sync",
                      "Embed real-time inverter intelligence",
                      "Co-develop enterprise automation solutions",
                    ],
                  },
                  {
                    number: "02",
                    title: "Commercial / Channel Partner",
                    features: [
                      "Bundle hardware with Suncube intelligence",
                      "Offer monitoring apps to customers",
                      "Add predictive maintenance service value",
                      "Use ready sales enablement kits",
                    ],
                  },
                  {
                    number: "03",
                    title: "Consulting & Analytics Partner",
                    features: [
                      "Deliver analytics for client reporting",
                      "Use blockchain-secure audit records",
                      "Provide sustainability and CO₂ insights",
                      "Run performance benchmarking assessments",
                    ],
                  },
                  {
                    number: "04",
                    title: "Installation & Service Partner",
                    features: [
                      "Deploy AI-guided solar installations",
                      "Reduce failures using predictive maintenance",
                      "Provide intelligent monitoring dashboards",
                      "Automate AMC with ticket routing",
                    ],
                  },
                ]}
              />
              <AboutTwo />
              <ParallaxCarousel />
              <ServiceAreaSix
                subtitle="Simple • Transparent • Scalable"
                title="How Partnership Works at Suncube AI"
                services={[
                  {
                    number: "01",
                    title: "Apply",
                    services: [
                      "Submit a short partner application",
                      "Share capabilities and service focus",
                      "Tell us your target market segment",
                      "Fast approval for verified businesses",
                    ],
                    img: "/images/partners/apply.jpg",
                  },
                  {
                    number: "02",
                    title: "Evaluate",
                    services: [
                      "Our team reviews your submission",
                      "Checks technical and operational fit",
                      "Aligns requirements with RBAC roles",
                      "Validates compliance & service quality",
                    ],
                    img: "/images/partners/evaluate.jpg",
                  },
                  {
                    number: "03",
                    title: "Onboard",
                    services: [
                      "Receive training & certification",
                      "Access APIs, sandbox, and docs",
                      "Get toolkits for solar + AI workflows",
                      "Enable monitoring & service modules",
                    ],
                    img: "/images/partners/onboard.jpg",
                  },
                  {
                    number: "04",
                    title: "Launch",
                    services: [
                      "Start deploying Suncube solutions",
                      "Offer AI-driven service packages",
                      "Use dashboards for real-time oversight",
                      "Scale seamlessly as your portfolio grows",
                    ],
                    img: "/images/partners/launch.jpg",
                  },
                ]}
                serviceDetailsLink="/service-details"
              />
              <ServiceDetailsApproach
                steps="04"
                subtitle="Advantage"
                heading="Deep Technology That Moves Markets And Empowers Solar Partnerships"
                approachItems={[
                  {
                    number: "01",
                    title: "AI at Core",
                    text: "Real-time anomaly detection and predictive maintenance to maximize uptime. Performance analytics help installers and integrators deliver smarter, more reliable systems.",
                  },
                  {
                    number: "02",
                    title: "Blockchain Security",
                    text: "Tamper-proof energy logs ensure full traceability and audit compliance. Ideal for consultants and utilities managing verified sustainability reporting.",
                  },
                  {
                    number: "03",
                    title: "Developer Platform",
                    text: "APIs, webhooks, and modular integration power custom dashboards. Scalable cloud architecture enables seamless embedding into EMS and BMS systems.",
                  },
                  {
                    number: "04",
                    title: "Grid Intelligence",
                    text: "Smart routing, load balancing, and real-time grid communication. Supports utilities and energy advisors in planning cleaner, more stable grids.",
                  },
                  {
                    number: "05",
                    title: "Sustainability Engine",
                    text: "CO₂ modelling and ESG reporting tools for enterprises. Global impact tracking ensures partners deliver measurable sustainability outcomes.",
                  },
                ]}
              />
              <TestimonialArea
                testimonials={impactStories}
                title="Where Suncube Technology Meets Industry Outcomes"
              />
              <CtaAreaFour line1="Accelerate your" line2="solar advantage" />
              <Footer />
            </main>
          </div>
        </CreativeAgencyWrapper>
      </MainWrapper>
    </>
  );
}
