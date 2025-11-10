import Image from "next/image";
import shape_3 from "@/assets/imgs/shape/shape-3.webp";
import shape_2 from "@/assets/imgs/shape/shape-2.webp";
import shape_1 from "@/assets/imgs/shape/shape-1.webp";

export default function HeroOne() {
  return (
    <section className="hero-area">
      <div className="container large">
        <div className="hero-area-inner section-spacing-top">
          <div className="hero-content section-spacing-bottom">
            <div
              className="award-wrapper fade-anim"
              data-delay="0.90"
              data-direction="left"
              data-ease="back.out(4)"
            >
              <div className="circle-text-wrapper">
                <div className="circle-text">
                  <h1 className="logo-letter">S</h1>
                  <div className="circle text">
                    <svg viewBox="0 0 100 100">
                      <defs>
                        <path
                          id="circlePath"
                          d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                        />
                      </defs>
                      <text
                        className="circle-text"
                        style={{fill:"white !important"}}
                        font-size="9"
                        letter-spacing="1.1"
                      >
                        <textPath href="#circlePath">
                         SUNCUBE AI • SUNCUBE AI • SUNCUBE AI •
                        </textPath>
                      </text>
                    </svg>
                  </div>

                </div>
              </div>
            </div>
            <div className="section-header">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2
                    className="section-title font-instrumentsans-medium char-anim"
                    data-delay="0.45"
                  >
                    Let’s power your planet with
                    <span>
                      <Image
                        className="title-shape-1 fade-anim"
                        src={shape_1}
                        alt="image"
                        data-direction="right"
                        data-delay="1.80"
                        style={{ height: "auto" }}
                      />
                    </span>
                    Intelligent Solar Innovation
                  </h2>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="features-wrapper-box fade-anim" data-delay="0.75">
                <div className="features-wrapper">
                  <div className="feature-box">
                    <div className="content">
                      <span className="number">99%</span>
                      <p className="text">
                        Systems uptime powered by AI intelligence
                      </p>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="content">
                      <span className="number">30+</span>
                      <p className="text">
                        Solar projects optimized across 10 countries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper fade-anim" data-delay="0.75">
                <p className="text">
                  We’re an AI-powered solar intelligence platform helping
                  enterprises monitor, predict, and optimize their energy
                  generation — transforming sunlight into smarter profits.
                </p>
              </div>
            </div>
          </div>
          <div className="big-text-wrapper">
            <h2 className="big-text">SUNCUBE</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
