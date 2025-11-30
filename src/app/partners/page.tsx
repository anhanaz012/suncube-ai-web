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
                  part1: "Together",
                  part2: "We",
                  part5: "Power",
                  part6: "Intelligence",
                }}
                infoText="Partner with a scalable, AI-powered clean energy ecosystem."
                aboutText="Suncube is more than a platform — it’s an intelligent solar infrastructure built for forward-thinking partners.
              With AI analytics, predictive maintenance, grid-aware communication, and blockchain-secured records, you can create new value for every customer you serve."
              />
              <ActuallyArea
                p1="A Partner Ecosystem"
                p2="Built for Scaling Innovation"
              />
              <ServiceAreaTwo
                showBottom={false}
                services={[
                  {
                    number: "001",
                    title: (
                      <>
                        AI Optimization <br /> Engine
                      </>
                    ),
                    text: "Suncube’s intelligence improves solar yield while reducing downtime losses. Partners deliver higher performance systems with fewer service interruptions.",
                    link: "/partners/ai-optimization",
                  },
                  {
                    number: "002",
                    title: (
                      <>
                        Predictive <br /> Maintenance
                      </>
                    ),
                    text: "AI forecasts component issues before failure, reducing field visits dramatically. Installers and integrators save cost while improving customer satisfaction.",
                    link: "/partners/predictive-maintenance",
                  },
                  {
                    number: "003",
                    title: (
                      <>
                        Blockchain <br /> Verification
                      </>
                    ),
                    text: "Tamper-proof energy records strengthen audits, compliance, and consulting work. Ideal for utilities, ESG advisors, and large-scale energy operators.",
                    link: "/partners/blockchain-verification",
                  },
                  {
                    number: "004",
                    title: (
                      <>
                        Developer-Ready <br /> APIs
                      </>
                    ),
                    text: "Real-time monitoring APIs let partners build custom dashboards effortlessly. Grid algorithms and RBAC enable full integration into enterprise workflows.",
                    link: "/partners/developer-apis",
                  },
                ]}
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

              <ServiceAreaSix
                subtitle="Partnership Models"
                title="A Strategic Pathway for Every Solar Business"
              />

              <ServiceAreaFour
                services={[
                  {
                    number: "01",
                    title: "Integration Partner",
                    features: [
                      "Full access to APIs and SDK ecosystems",
                      "Collaborative co-development for advanced solutions",
                      "Embed AI intelligence into software or hardware",
                      "Execute joint enterprise-scale deployments",
                    ],
                  },
                  {
                    number: "02",
                    title: "Commercial / Channel Partner",
                    features: [
                      "Resell Suncube AI across local markets",
                      "Offer full white-label branding configurations",
                      "Access end-to-end sales enablement programs",
                      "Utilize premium marketing kits and demos",
                    ],
                  },
                  {
                    number: "03",
                    title: "Consulting & Analytics Partner",
                    features: [
                      "Leverage ESG-ready sustainability intelligence",
                      "Use CO₂ modelling and impact simulations",
                      "Deliver blockchain-secured audit-grade reports",
                      "Access advanced analytics for client assessments",
                    ],
                  },
                  {
                    number: "04",
                    title: "Installation & Service Partner",
                    features: [
                      "Deploy AI-driven predictive maintenance flows",
                      "Enable customer monitoring through live dashboards",
                      "Automate AMC with smart ticket routing",
                      "Offer optional revenue-sharing on services",
                    ],
                  },
                ]}
              />

              <TestimonialArea
                testimonials={impactStories}
                title="Where Suncube Technology Meets Industry Outcomes"
              />

              <ServiceAreaThree
                title={
                  <>
                    Building the World’s <br />
                    Smartest Solar Network.
                  </>
                }
                description="A unified vision powered by distributed AI, transparent energy flows, and climate-positive innovation."
                services={[
                  {
                    img: "/assets/imgs/partners/apply.jpg",
                    title: "Distributed AI Intelligence",
                    text: "A global network of systems continuously learning from solar data to optimize performance everywhere.",
                    delay: "0.45",
                  },
                  {
                    img: "/assets/imgs/partners/evaluate.jpg",
                    title: "Zero-Downtime Ecosystems",
                    text: "Predictive maintenance, real-time anomaly detection, and automated workflows that keep solar running reliably.",
                    delay: "0.60",
                  },
                  {
                    img: "/assets/imgs/partners/onboard.jpg",
                    title: "Transparent Energy Markets",
                    text: "Blockchain-secured logs build trust across regions, enabling clean, verifiable, and intelligent energy exchange.",
                    delay: "0.75",
                  },
                  {
                    img: "/assets/imgs/partners/launch.jpg",
                    title: "Climate-Positive Innovation",
                    text: "AI-driven sustainability metrics and CO₂ insights empower global partners to accelerate environmental impact.",
                    delay: "0.90",
                  },
                ]}
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
