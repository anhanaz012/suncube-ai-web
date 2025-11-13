import Image from "next/image";
import Link from "next/link";

export default function ServiceAreaSix() {
  return (
    <section className="service-area-service-page">
      <div className="container large">
        <div className="service-area-service-page-inner">
          {/* Section Header */}
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">Technology</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">
                  Powered by Advanced Technology
                </h2>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="services-wrapper-box fade-anim">
            <div className="services-wrapper-1">
              {[
                {
                  number: "(01)",
                  title: "Artificial Intelligence",
                  services: [
                    "Machine learning algorithms optimize energy production, predict maintenance needs, and automate grid interactions. ",
                  ],
                  img: "/assets/imgs/solutions/img1.png",
                },
                {
                  number: "(02)",
                  title: "Blockchain Security ",
                  services: [
                    "Secure, transparent energy transactions with immutable records and smart contract automation.",
                  ],
                  img: "/assets/imgs/solutions/image.png",
                },
                {
                  number: "(03)",
                  title: "IoT Integration",
                  services: [
                    "Real-time sensor data and smart device connectivity for comprehensive system monitoring.",
                  ],
                  img:  "/assets/imgs/solutions/img3.png",
                },
              ].map((service, index) => (
                <div className="service-box fade-anim" key={index}>
                  <div className="count">
                    <span className="number">{service.number}</span>
                  </div>
                  <div className="content">
                    <h3 className="title">
                      <Link href="/service-details">{service.title}</Link>
                    </h3>
                    <ul className="service-list">
                      {service.services.map((item, idx) => (
                        <li key={idx}>
                          <Link href="/service-details">{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="thumb">
                    <Image
                      className="grow"
                      src={service.img}
                      alt={service.title}
                      width={545}
                      height={265}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
