import shape from "@/assets/imgs/shape/shape-7.webp";
import img from "@/assets/imgs/gallery/img1.jpeg";

// import Image from "next/image";

// export default function HeroTwo() {
//   return (
//     <section className="hero-area-2">
//       <div className="container large">
//         <div className="hero-area-2-inner">
//           <div className="section-header">
//             <div className="section-title-wrapper">
//               <div className="title-wrapper">
//                 <h1
//                   className="section-title font-sequelsans-romanbody char-anim"
//                   data-delay="0.45"
//                   data-direction="left"
//                 >
//                   Design <br />
//                   Solar{" "}
//                   <Image
//                     className="title-shape-1 fade-anim"
//                     data-delay="1.9"
//                     data-offset="100"
//                     data-direction="left"
//                     src={shape}
//                     alt="img"
//                   />
//                   <br />
//                   <Image
//                     className="title-video fade-anim"
//                     data-delay="1.9"
//                     data-offset="100"
//                     data-direction="right"
//                     src={img}
//                     alt="image"
//                     width={268}
//                     height={150}
//                   />{" "}
//                   Solutions
//                   <br/>
//                   For you
//                 </h1>
//               </div>
//             </div>
//           </div>
//           <div className="section-content">
//             <div className="text-wrapper">
//               <p
//                 className="text info-text fade-anim"
//                 // style={{marginTop:'180px !important'}}
//                 data-delay="2.15"
//                 data-offset="100"
//                 data-direction="right"
//               >
//                 An <span>AI Powered</span> Energy Systems
//               </p>
//               <p className="text about-text rr_title_anim">
// From residential homes to large commercial installations, our
// AI-powered platform scales to meet your energy needs while
// maximizing efficiency and profitability.

//               </p>
//             </div>
//             <div className="hero-thumb fade-anim parallax-view">
//               <img
//                 src="https://www.westcoastsolar.com/wp-content/uploads/2023/02/post-04_california-history_01-1536x864.jpg"
//                 alt="image"
//                 data-speed="0.6"
//                 style={{ height: "500px", objectFit: "cover", width: "100%" }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Image, { StaticImageData } from "next/image";
interface Heading {
  part1: string;
  part2: string;
  part3Img?: string | null | StaticImageData;
  part4Img?: string | null | StaticImageData;
  part5: string;
  part6: string;
}
interface HeroTwoProps {
  heading?: Heading;
  infoText?: string;
  aboutText?: string;
  heroImage?: string;
}
export default function HeroTwo({
  heading = {
    part1: "Design",
    part2: "Solar",
    part5: "Solutions",
    part6: "For you",
  },
  infoText = "An AI Powered Energy Systems",
  aboutText = "From residential homes to large commercial installations, our AI-powered platform scales to meet your energy needs while maximizing efficiency and profitability.",
  heroImage = "https://www.westcoastsolar.com/wp-content/uploads/2023/02/post-04_california-history_01-1536x864.jpg",
}: HeroTwoProps) {
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
                  {heading.part1}
                  <br />
                  {heading.part2}{" "}
                  <Image
                    className="title-shape-1 fade-anim"
                    data-delay="1.9"
                    data-offset="100"
                    data-direction="left"
                    src={shape}
                    alt="shape"
                  />
                  <br />
                  <Image
                    className="title-video fade-anim"
                    data-delay="1.9"
                    data-offset="100"
                    data-direction="right"
                    src={img}
                    alt="video"
                    width={268}
                    height={150}
                  />
                  {heading.part5}
                  <br />
                  {heading.part6}
                </h1>
              </div>
            </div>
          </div>

          <div className="section-content">
            <div className="text-wrapper">
              <p
                className="text info-text fade-anim"
                data-delay="2.15"
                data-offset="100"
                data-direction="right"
              >
                {infoText
                  .split(" ")
                  .map((word, i) =>
                    word.toLowerCase() === "ai" ? (
                      <span key={i}>AI </span>
                    ) : (
                      word + " "
                    )
                  )}
              </p>

              <p className="text about-text rr_title_anim">{aboutText}</p>
            </div>

            <div className="hero-thumb fade-anim parallax-view">
              <img
                src={heroImage}
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
