import Image from "next/image";
import Link from "next/link";
const services = [
  {
    img: "/assets/imgs/gallery/image-13.webp",
    title: "Smart Installatio",
    text: "AI-assisted panel placement and grid integration for maximum energy capture, efficiency, and system stability — all installed with precision and minimal disruption. ",
    delay: "0.45",
  },
  {
    img: "/assets/imgs/gallery/image-14.webp",
    title: "Real-time Monitoring",
    text: "24/7 data surveillance powered by predictive analytics. Instantly track performance, detect issues early, and gain deep insight into system health — all in real time. ",
    delay: "0.60",
  },
  {
    img: "/assets/imgs/gallery/image-15.webp",
    title: "Smart Grid Integration",
    text: "Intelligent synchronization between energy production, battery storage, and grid systems — ensuring seamless power flow and optimized energy distribution.",
    delay: "0.75",
  },
  {
    img: "/assets/imgs/gallery/image-16.webp",
    title: "Automated Payments",
    text: "Blockchain-backed automation streamlines your billing, transactions, and credit management — offering complete transparency with zero manual effort.",
    delay: "0.90",
  },
];

export const ServiceThreeWrapperArea = () => {
  return (
    <div className="services-wrapper-3">
      {services.map((service, idx) => (
        <div
          className="service-box fade-anim"
          data-delay={service.delay}
          key={idx}
        >
          <div className="thumb">
            <Link href="/service-details">
              <Image src={service.img} alt="image" width={110} height={110} />
            </Link>
          </div>
          <div className="content">
            <h3 className="title">
              <Link href="/service-details">{service.title}</Link>
            </h3>
            <p className="text">{service.text}</p>
            <Link href="/service-details" className="rr-btn-underline">
              Explore
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function ServiceAreaThree() {
  return (
    <section className="service-area-3">
      <div className="container large">
        <div className="service-area-3-inner section-spacing-top">
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody rr_title_anim">
                  Planned. Installed. <br />
                  Optimized. Perfected.{" "}
                  <span className="mb-14">
                    <Link href="/services" className="rr-btn-group">
                      <span className="b">Discover more</span>
                      <span className="c">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                  </span>
                </h2>
                <p className="mt-4">
                  From initial setup to automated energy optimization, Suncube
                  AI delivers an end-to-end solar experience that’s intelligent,
                  transparent, and effortless. Our AI-powered platform ensures
                  that every stage of implementation — from planning to payments
                  — runs smarter, cleaner, and more efficiently.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="services-wrapper-box">
            <ServiceThreeWrapperArea />
          </div>
        </div>
      </div>
    </section>
  );
}
