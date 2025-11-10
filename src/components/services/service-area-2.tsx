import Image from "next/image";
import Link from "next/link";
import gallery_1 from "@/assets/imgs/gallery/img1.jpeg";
import gallery_2 from "@/assets/imgs/gallery/img2.jpeg";

const services = [
  {
    number: "001",
    title: (
      <>
        AI Powered <br />
        Solutions
      </>
    ),
    text: "At Suncube AI, every ray of sunlight is analyzed, predicted, and optimized in real time. Our proprietary machine-learning algorithms study performance patterns, forecast yield fluctuations, and auto-adjust system parameters to ensure peak output. The result — consistently higher energy production, lower losses, and a system that learns, adapts, and outperforms itself every single day",
  },
  {
    number: "002",
    title: (
      <>
        Blockchain <br />
        Security
      </>
    ),
    text: "We bring transparency and traceability to clean energy. Each energy transaction, data point, and performance record is logged on an immutable blockchain ledger. This ensures total data integrity, eliminates tampering, and enables verifiable sustainability reporting. With Suncube’s blockchain-backed records, your energy becomes not just green — but genuinely trustworthy.",
  },
  {
    number: "003",
    title: (
      <>
        Predictive <br />
        Maintenance
      </>
    ),
    text: "Our AI doesn’t just monitor — it predicts. Using real-time sensor data and historical trends, Suncube’s predictive maintenance engine identifies potential issues before they affect system performance. Get proactive alerts, actionable insights, and automated maintenance schedules — maximizing uptime, reducing costs, and extending the lifespan of your assets without ever lifting a finger.",
  },
  {
    number: "004",
    title: (
      <>
        Carbon Footprint <br />
        Tracking
      </>
    ),
    text: "Track your sustainability progress with live CO₂ offset analytics. Our intelligent dashboards quantify exactly how much carbon your solar systems are saving and translate that into measurable environmental impact. Whether you’re a homeowner or a global enterprise, Suncube helps you visualize your green contribution — making every kilowatt count toward a cleaner future.",
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
                  href="/service-suncube"
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
                  style={{ height: "auto",minHeight:"250px" }}
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
                <Link href="/suncube-work" className="rr-btn btn-border-white">
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
                  style={{ height: "auto",maxHeight:"600px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}