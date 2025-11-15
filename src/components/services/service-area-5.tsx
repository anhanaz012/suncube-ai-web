import React from "react";
import Image from "next/image";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  text: string;
  image: string;
  link: string;
}

const defaultServices: ServiceItem[] = [
  {
    id: "1",
    number: "(001)",
    title: "Predictive Optimization",
    text: "AI analyzes sunlight patterns, shading, and local weather to adapt output dynamically — making every ray count, even on cloudy days.",
    image: "/assets/imgs/solutions/img5.png",
    link: "/service-details",
  },
  {
    id: "2",
    number: "(002)",
    title: "Smart Power Routing",
    text: "Automatically directs energy between your home, storage, and the grid — ensuring zero wastage and total control.",
    image: "/assets/imgs/solutions/img6.png",
    link: "/service-details",
  },
  {
    id: "3",
    number: "(003)",
    title: "Predictive Maintenance",
    text: "Detects inefficiencies, dust build-up, or component wear before performance drops — preventing surprises and saving costs.",
    image: "/assets/imgs/solutions/img7.png",
    link: "/service-details",
  },
  {
    id: "4",
    number: "(004)",
    title: "AI + Blockchain Billing",
    text: "Tracks, audits, and secures your energy trades with automated, tamper-proof precision.",
    image: "/assets/imgs/solutions/img8.png",
    link: "/service-details",
  },
  {
    id: "5",
    number: "(005)",
    title: "Sustainability Insights",
    text: "Converts your clean energy data into measurable impact — showing exactly how your home powers a greener planet.",
    image: "/assets/imgs/solutions/img9.png",
    link: "/service-details",
  },
];

type ServiceAreaFiveProps = {
  spacing?: string;
  title_font?: string;
  services?: ServiceItem[];
  heading?: string;
  subheading?: string;
  description?: string;
};

const ServiceAreaFive = ({
  spacing = "section-spacing-top",
  title_font = "font-bdogrotesk-regular",
  services = defaultServices,
  subheading = "The Suncube AI Solution",
  heading = "Your Solar, Supercharged with Intelligence",
  description = `Suncube AI doesn’t just collect data — it understands it. Our intelligent system continuously learns from your panels, weather conditions, and usage habits to deliver maximum efficiency, zero waste, and full financial transparency.`,
}: ServiceAreaFiveProps) => {
  return (
    <section className="service-area-5">
      <div className="container large">
        <div className={`service-area-5-inner ${spacing}`}>
          {/* HEADER */}
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {subheading}
                  <svg
                    viewBox="0 0 99 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.4 5.98C1.4 5.98 3.66 6.01 4.51 5.98C7.19 5.56 10.42 5.80 13.36 5.56C17.82 5.20 22.13 4.79 26.61 4.79C31.67 4.79 36.67 4.21 41.71 4.18C46.98 4.15 52.24 4.18 57.51 4.18C68.64 4.18 79.78 4.18 90.91 4.18C121.15 6.61 47.65 -1.30 1 1.68"
                      stroke="#111"
                      strokeLinecap="round"
                      className="svg-elem-1"
                    />
                  </svg>
                </span>
              </div>

              <div className="title-wrapper tt_title_anim">
                <h2 className={`section-title ${title_font}`}>{heading}</h2>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="services-wrapper-box">
            <div className="text-wrapper fade-anim">
              <p className="info-text">{description}</p>
            </div>

            {/* SERVICES */}
            <div className="services-wrapper-5">
              {services.map((service) => (
                <a href={service.link} key={service.id}>
                  <div className="service-box fade-anim">
                    <div className="count">
                      <span className="number">{service.number}</span>
                    </div>

                    <div className="content">
                      <h3 className="title">{service.title}</h3>
                      <p className="text">{service.text}</p>
                    </div>

                    <div className="thumb">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={165}
                        height={92}
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaFive;
