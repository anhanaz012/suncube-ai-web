import Image from "next/image";
import Link from "next/link";
import gallery_1 from "@/assets/imgs/gallery/image-10.webp";
import gallery_2 from "@/assets/imgs/gallery/image-11.webp";

const services = [
  {
    number: "001",
    title: (
      <>
        Solar <br />
        Energy Solutions
      </>
    ),
    text: "Designing and deploying solar systems tailored for homes and businesses, maximizing efficiency while reducing your carbon footprint.",
  },
  {
    number: "002",
    title: (
      <>
        Smart <br />
        Energy Management
      </>
    ),
    text: "Harnessing AI to monitor, predict, and optimize energy usage so your systems work smarter and cost less.",
  },
  {
    number: "003",
    title: (
      <>
        Battery & <br />
        Storage Systems
      </>
    ),
    text: "Integrating advanced energy storage to ensure power availability even when the sun isn’t shining.",
  },
  {
    number: "004",
    title: (
      <>
        Sustainable <br />
        Consulting
      </>
    ),
    text: "Providing expert guidance on clean energy adoption, helping businesses and households transition to greener solutions.",
  },
  {
    number: "005",
    title: (
      <>
        Maintenance & <br />
        Support
      </>
    ),
    text: "Continuous monitoring and servicing to keep your solar systems performing at their best, year after year.",
  },
];

export default function ServiceAreaTwo() {
  return (
    <section className="service-area-2">
      <div className="service-area-2-inner">
        <div className="services-wrapper-box section-spacing-bottom">
          <div className="container large">
            <div className="services-wrapper-2">
              {services.map((service) => (
                <Link
                  className="fade-anim"
                  href="/service-details"
                  key={service.number}
                >
                  <div className="service-box-wrapper">
                    <div className="service-box">
                      <div className="number">{service.number}</div>
                      <h3 className="title">{service.title}</h3>
                      <p className="text">{service.text}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="service-content-wrapper section-spacing-top">
        <div className="container large">
          <div className="service-content">
            <div
              className="section-info-wrapper fade-anim"
              data-direction="left"
            >
              <div className="thumb parallax-view">
                <Image
                  src={gallery_1}
                  alt="image"
                  data-speed="0.7"
                  style={{ height: "auto" }}
                />
              </div>
              <div className="text-wrapper">
                <p className="text text-invert">
                  A practical guide on how intelligent solar energy systems can
                  transform any home or project, ensuring efficiency,
                  sustainability, and seamless integration.
                </p>
                <p className="text text-invert">
                  If you’re ready to embrace smart energy solutions, continue
                  scrolling; otherwise, click the link below to learn more.
                </p>
              </div>

              <div className="btn-wrapper">
                <Link href="/portfolio" className="rr-btn btn-border-white">
                  <span className="btn-wrap">
                    <span className="text-one">View All Work</span>
                    <span className="text-two">View All Work</span>
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="section-thumb-wrapper fade-anim"
              data-delay="0.45"
              data-direction="right"
            >
              <div className="thumb parallax-view">
                <Image
                  src={gallery_2}
                  alt="image"
                  data-speed="0.6"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
