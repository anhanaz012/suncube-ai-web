import Image from "next/image";
import Link from "next/link";
import gallery_1 from "@/assets/imgs/gallery/img1.jpeg";
import gallery_2 from "@/assets/imgs/gallery/img2.jpeg";

const defaultServices = [
  {
    number: "001",
    title: (
      <>
        AI Powered <br /> Solutions
      </>
    ),
    text: "At Suncube AI, every ray of sunlight is analyzed...",
  },
  {
    number: "002",
    title: (
      <>
        Blockchain <br /> Security
      </>
    ),
    text: "We bring transparency and traceability to clean energy...",
  },
  {
    number: "003",
    title: (
      <>
        Predictive <br /> Maintenance
      </>
    ),
    text: "Our AI doesn’t just monitor — it predicts...",
  },
  {
    number: "004",
    title: (
      <>
        Carbon Footprint <br /> Tracking
      </>
    ),
    text: "Track your sustainability progress with live CO₂...",
  },
];

export default function ServiceAreaTwo({
  services = defaultServices,
  image1 = gallery_1,
  image2 = gallery_2,
  bottomText1 = "A practical guide on how intelligent solar energy systems can transform any home or project...",
  bottomText2 = "If you’re ready to embrace smart energy solutions, continue scrolling; otherwise, click the link below...",
  buttonText = "View All Work",
  buttonLink = "/suncube-work",
  showBottom = true
}) {
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
      {showBottom && (
        <>
          {/* Bottom Section */}
          <div className="service-content-wrapper section-spacing-top">
            <div className="container large">
              <div className="service-content">
                {/* Left Side */}
                <div
                  className="section-info-wrapper fade-anim"
                  data-direction="left"
                >
                  <div className="thumb parallax-view">
                    <Image
                      src={image1}
                      alt="image"
                      data-speed="0.7"
                      style={{ height: "auto", minHeight: "250px" }}
                    />
                  </div>

                  <div className="text-wrapper">
                    <p className="text text-invert">{bottomText1}</p>
                    <p className="text text-invert">{bottomText2}</p>
                  </div>

                  <div className="btn-wrapper">
                    <Link href={buttonLink} className="rr-btn btn-border-white">
                      <span className="btn-wrap">
                        <span className="text-one">{buttonText}</span>
                        <span className="text-two">{buttonText}</span>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right Side */}
                <div
                  className="section-thumb-wrapper fade-anim"
                  data-delay="0.45"
                  data-direction="right"
                >
                  <div className="thumb parallax-view">
                    <Image
                      src={image2}
                      alt="image"
                      data-speed="0.6"
                      style={{ height: "auto", maxHeight: "600px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
