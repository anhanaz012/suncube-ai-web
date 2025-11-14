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

const services: ServiceItem[] = [
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

type IProps = {
  spacing?: string;
  title_font?: string;
};

const ServiceAreaFive = ({
  spacing = "section-spacing-top",
  title_font = "font-bdogrotesk-regular",
}: IProps) => {
  return (
    <section className="service-area-5">
      <div className="container large">
        <div className={`service-area-5-inner ${spacing}`}>
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  The Suncube AI Solution
                  <svg
                    viewBox="0 0 99 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.41291 5.98894C1.41291 5.98894 3.65997 6.01383 4.51655 5.98894C7.19358 5.56824 10.4255 5.80978 13.363 5.56824C17.8256 5.20128 22.1327 4.79415 26.6187 4.79415C31.6715 4.79415 36.6774 4.21934 41.7162 4.18834C46.981 4.15594 52.2465 4.18834 57.5114 4.18834C68.6462 4.18834 79.781 4.18834 90.9158 4.18834C121.155 6.61149 47.6583 -1.30401 1 1.68408"
                      stroke="#111111"
                      strokeLinecap="round"
                      className="svg-elem-1"
                    />
                  </svg>
                </span>
              </div>
              <div className="title-wrapper tt_title_anim">
                <h2 className={`section-title ${title_font}`}>
                  Your Solar, Supercharged with Intelligence
                </h2>
              </div>
            </div>
          </div>

          <div className="services-wrapper-box">
            <div className="text-wrapper fade-anim">
              <p className="info-text">
                Suncube AI doesn’t just collect data — it understands it. Our
                intelligent system continuously learns from your panels, weather
                conditions, and usage habits to deliver maximum efficiency, zero
                waste, and full financial transparency. Every watt is optimized,
                every unit is accounted for — automatically. Here’s how
                intelligence powers your solar system:
              </p>
            </div>

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
