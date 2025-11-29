import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import defaultShape from "@/assets/imgs/shape/shape-12.webp";
import defaultGalleryImg from "@/assets/imgs/solutions/img11.png";

interface FunFactAreaTwoProps {
  heading?: string;
  buttonText?: string;
  buttonLink?: string;
  paragraph?: string;
  uptime?: string;
  infoText?: string;
  shapeImage?: StaticImageData;
  galleryImage?: StaticImageData;
}
export default function FunFactAreaTwo({
  heading = "Industrial Solar Generates Power. But It Doesn’t Manage It.",
  buttonText = "Get started",
  buttonLink = "/contact",
  paragraph = `Factories and commercial sites run on constantly changing loads — heavy machinery, HVAC cycles, and fluctuating peak hours. Traditional solar systems can’t adapt to these shifts, leading to unnoticed inefficiencies, intermittent downtime, and unexpected energy spikes. Suncube AI brings intelligence to the system, ensuring your power stays optimized, stable, and cost-efficient.`,
  uptime = "99.9%",
  infoText = "Operational Uptime You Can Trust. AI keeps your solar infrastructure stable, efficient, and production-ready — across every shift.",
  shapeImage = defaultShape,
  galleryImage = defaultGalleryImg,
}: FunFactAreaTwoProps) {
  return (
    <section className="funfact-area-2">
      <div className="funfact-area-2-inner section-spacing-top">
        <div className="container large">
          {/* HEADER */}
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                  <span className="mb-14">
                    <Link href={buttonLink} className="rr-btn-group btn-whte">
                      <span className="b">{buttonText}</span>
                    </Link>
                  </span>
                <h2 className="section-title mt-4 font-sequelsans-romanbody rr_title_anim">
                  {heading}{" "}
                </h2>
              </div>
            </div>
          </div>
          {/* CONTENT */}
          <div className="section-content">
            <div className="text-wrapper fade-anim">
              <p className="text">{paragraph}</p>
            </div>
            <div className="info-text fade-anim" data-direction="right">
              <span className="year">{uptime} </span>
              <div className="about-info">
                <Image src={shapeImage} alt="image" />
                <p className="text">{infoText}</p>
              </div>
            </div>
          </div>
        </div>
        {/* GALLERY IMAGE */}
        <div className="thumb fade-anim">
          <Image src={galleryImage} alt="image" style={{ height: "auto" }} />
        </div>
      </div>
    </section>
  );
}