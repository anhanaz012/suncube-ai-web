import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import defaultShape1 from "@/assets/imgs/shape/shape-10.webp";
import defaultShape2 from "@/assets/imgs/shape/shape-11.webp";
import defaultGalleryImg from "@/assets/imgs/gallery/image-10.webp";

interface HeroThreeProps {
  // subtitle?: string;
  p1?: string; // "Smarter Energy"
  p2?: string; // "Made For Smarter Homes."
  p3?: string; // "Residential Solar"

  highlightImage?: StaticImageData;
  shape1?: StaticImageData;
  shape2?: StaticImageData;

  bottomText?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function HeroThree({
  // subtitle = "Solar Built to a Higher Standard®",
  p1 = "Smarter Energy",
  p2 = "Made For Smarter Homes.",
  p3 = "Residential Solar",

  highlightImage = defaultGalleryImg,
  shape1 = defaultShape1,
  shape2 = defaultShape2,

  bottomText = "Powered by AI — built for homes of today and tomorrow.",

  description = `Transform your home into an intelligent energy ecosystem.
Suncube AI elevates residential solar from just generating power to actively managing it.
Your panels don’t just work — they learn, adapt, and deliver maximum yield with zero effort.`,

  buttonText = "Get a Smart Solar Plan",
  buttonLink = "/contact-us",
}: HeroThreeProps) {
  return (
    <section className="hero-area-3">
      <div className="container large">
        <div className="hero-area-3-inner">
          {/* Subtitle */}
          <div className="section-header">
            <div className="section-title-wrapper">
              {/* HEADING */}
              <div className="title-wrapper">
                <h1
                  className="section-title font-sequelsans-romanbody fade-anim"
                  data-delay="0.45"
                >
                  {p1}
                  <Image className="title-shape-1" src={shape1} alt="shape-1" />
                  {p2}{" "}
                  <span className="text-underline hover-image-wrpper">
                    {p3}{" "}
                    <Image
                      className="image-hover"
                      src={highlightImage}
                      alt="highlight"
                      style={{ height: "auto" }}
                    />
                  </span>
                  <Image className="title-shape-2" src={shape2} alt="shape-2" />
                </h1>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="section-content">
            <h1 style={{ visibility: "hidden" }}>hidden text</h1>
            <div className="content-middle fade-anim" data-delay="0.75">
              <p className="text info-text">{bottomText}</p>
            </div>

            <div className="content-last fade-anim" data-delay="0.90">
              <div className="text-wrapper">
                <p className="text about-text rr_title_anim">{description}</p>
              </div>

              <div className="btn-wrapper">
                <Link href={buttonLink} className="rr-btn-group">
                  <span className="b">{buttonText}</span>
                  <span className="c">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
