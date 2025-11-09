import Image from "next/image";
import Link from "next/link";
const services = [
  {
    img: "/assets/imgs/gallery/image-13.webp",
    title: "100% Renewable",
    text: "Harness clean, sustainable energy to power your home or business while reducing your carbon footprint.",
    delay: "0.45",
  },
  {
    img: "/assets/imgs/gallery/image-14.webp",
    title: "Cost Saving",
    text: "Optimize energy usage and lower your bills with smart solar and battery systems.",
    delay: "0.60",
  },
  {
    img: "/assets/imgs/gallery/image-15.webp",
    title: "AI Optimized",
    text: "Intelligent energy management that adapts to your needs and maximizes efficiency every day.",
    delay: "0.75",
  },
  {
    img: "/assets/imgs/gallery/image-16.webp",
    title: "24/7 Support",
    text: "Reliable support and monitoring to ensure your solar system always performs at its best.",
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
  )
}

export default function ServiceAreaThree() {
  return (
    <section className="service-area-3">
      <div className="container large">
        <div className="service-area-3-inner section-spacing-top">
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody rr_title_anim">
                  Why Choose <br />
                  Us{" "}
                  <span className="mb-14">
                    <Link href="/services" className="rr-btn-group">
                      <span className="b">Discover more</span>
                      <span className="c">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                  </span>
                </h2>
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