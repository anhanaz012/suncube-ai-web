import shape from "@/assets/imgs/shape/shape-7.webp";
import img from "@/assets/imgs/gallery/img1.jpeg"
import Image from "next/image";

export default function HeroTwo() {
  return (
    <section className="hero-area-2">
      <div className="container large">
        <div className="hero-area-2-inner">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h1
                  className="section-title font-sequelsans-romanbody char-anim"
                  data-delay="0.45"
                  data-direction="left"
                >
                  Comprehensive
                  <Image
                    className="title-shape-1 fade-anim"
                    data-delay="1.9"
                    data-offset="100"
                    data-direction="left"
                    src={shape}
                    alt="img"
                  />{" "}
                  <br />
                  <Image
                    className="title-video fade-anim"
                    data-delay="1.9"
                    data-offset="100"
                    data-direction="right"
                    src={img}
                    alt="image"
                    width={150}
                    height={150}
                  />
                  Solar <br />
                  Solutions
                </h1>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="text-wrapper">
              <p
                className="text info-text fade-anim"
                // style={{marginTop:'180px !important'}}
                data-delay="2.15"
                data-offset="100"
                data-direction="right"
              >
                An <span>AI Powered</span> Energy Systems
              </p>
              <p className="text about-text rr_title_anim">
                From residential homes to large commercial installations, our
                AI-powered platform scales to meet your energy needs while
                maximizing efficiency and profitability.
              </p>
            </div>
            <div className="hero-thumb fade-anim parallax-view">
              <img
                src="https://www.westcoastsolar.com/wp-content/uploads/2023/02/post-04_california-history_01-1536x864.jpg"
                alt="image"
                data-speed="0.6"
                style={{ height: "500px", objectFit: "cover", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
