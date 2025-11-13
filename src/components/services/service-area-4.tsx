import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Residential Solar + AI ",
    features: [
      "Real-time monitoring",
      "Predictive maintenance ",
      "AI-based optimization for home energy flow",
    ],
  },
  {
    number: "02",
    title: "Commercial & Industrial Solar ",
    features: [
      "Enterprise-grade solar optimization",
      "Predictive maintenance for uptime ",
      "Smart grid export and billing ",
    ],
  },
  {
    number: "03",
    title: "Smart Grid & Virtual Power Plant",
    features: [
      "AI-based grid perception and control",
      "Load balancing automation",
      "Virtual power plant coordination",
    ],
  },
  {
    number: "04",
    title: "AI Monitoring & Predictive Maintenance",
    features: [
      "24/7 AI-based performance monitoring",
      "Predictive maintenance forecasting",
      "Automatic fault detection",
    ],
  },
  {
    number: "05",
    title: "Data Insights & Forecasting",
    features: [
      "AI-driven energy forecasting",
      "Weather-based performance prediction",
      "Real-time system insights and reports",
    ],
  },
  {
    number: "06",
    title: "Cloud Dashboard",
    features: [
      "Centralized cloud-based monitoring",
      "Secure access control and analytics ",
      "Live performance visualization",
    ],
  },
];

type IProps = {
  wrapperCls?: string;
};

const ServiceAreaFour = ({ wrapperCls }: IProps) => {
  return (
    <section className="service-area-4">
      <div className="container large">
        <div className="service-area-4-inner">
          <div className={`services-wrapper-box ${wrapperCls || ""}`}>
            <div className="services-wrapper-4">
              {services.map((service, index) => (
                <div className="service-box fade-anim" key={index}>
                  <span className="number">{service.number}</span>
                  <h2 className="service-title">
                    <Link href="/service-details">{service.title}</Link>
                  </h2>
                  <div className="feature-list">
                    <ul>
                      {service.features.map((feature, i) => (
                        <li key={i} className="cursor-pointer">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="service-thumb">
                <Image
                  src="/assets/imgs/project/image.png"
                  alt="image not found"
                  width={1920}
                  height={970}
                  style={{ height: "auto",maxHeight:'800px' }}
                />
                <div className="service-thumb-line-wrapper">
                  {Array.from({ length: 11 }).map((_, i) => (
                    <span key={i}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaFour;
