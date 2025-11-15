// import Image from "next/image";
// import shape from "@/assets/imgs/shape/shape-13.webp";

// export default function ApproachAboutArea() {
//   return (
//     <section className="approach-area-about-page">
//       <div className="container large">
//         <div className="approach-area-about-page-inner section-spacing">
//           <div className="section-header fade-anim">
//             <div className="section-title-wrapper">
//               <div className="subtitle-wrapper">
//                 <span className="section-subtitle">Process</span>
//               </div>
//               <div className="title-wrapper">
//                 <h2 className="section-title font-sequelsans-romanbody">
//                   A Simple Connection. A Smarter Transformation
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div className="approach-wrapper-box">
//             <div className="approach-wrapper fade-anim">
//               <div className="approach-box">
//                 <h2 className="title">
//                   Connection <br />
//                   Setup <Image src={shape} alt="image" />
//                 </h2>
//                 <div className="approach-list">
//                   <ul>
//                     <li>Connect your solar system to Suncube AI </li>
//                     <li>No new hardware required </li>
//                     <li>Instantly syncs with inverters & meters </li>
//                     <li>Secure cloud-based onboarding </li>
//                     <li>Seamless plug-and-play activation</li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="approach-box">
//                 <h2 className="title">
//                   Intelligent <br />
//                   Analysis <Image src={shape} alt="image" />
//                 </h2>
//                 <div className="approach-list">
//                   <ul>
//                     <li>AI studies your home’s usage patterns </li>
//                     <li>Evaluates sunlight, weather & seasonal shifts </li>
//                     <li>Learns your daily energy behavior </li>
//                     <li>Detects inefficiencies automatically </li>
//                     <li>Builds a personalized optimization model </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="approach-box">
//                 <h2 className="title">
//                   Continuous <br />
//                   Optimization{" "}
//                 </h2>
//                 <div className="approach-list">
//                   <ul>
//                     <li>AI auto-adjusts energy flow </li>
//                     <li>Predictive maintenance alerts </li>
//                     <li>Real-time performance tracking </li>
//                     <li>Smart savings recommendations </li>
//                     <li>Works fully in the background — no effort needed </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Image, { StaticImageData } from "next/image";
import defaultShape from "@/assets/imgs/shape/shape-13.webp";
import React from "react";

interface ApproachBox {
  title: string[]; // array for lines before/after <br />
  list: string[];
  shapeImage?: StaticImageData; // optional per box
}

interface ApproachAboutAreaProps {
  subtitle?: string;
  heading?: string;
  approachBoxes?: ApproachBox[];
}

const defaultApproachBoxes: ApproachBox[] = [
  {
    title: ["Connection", "Setup"],
    shapeImage: defaultShape,
    list: [
      "Connect your solar system to Suncube AI",
      "No new hardware required",
      "Instantly syncs with inverters & meters",
      "Secure cloud-based onboarding",
      "Seamless plug-and-play activation",
    ],
  },
  {
    title: ["Intelligent", "Analysis"],
    shapeImage: defaultShape,
    list: [
      "AI studies your home’s usage patterns",
      "Evaluates sunlight, weather & seasonal shifts",
      "Learns your daily energy behavior",
      "Detects inefficiencies automatically",
      "Builds a personalized optimization model",
    ],
  },
  {
    title: ["Continuous", "Optimization"],
    list: [
      "AI auto-adjusts energy flow",
      "Predictive maintenance alerts",
      "Real-time performance tracking",
      "Smart savings recommendations",
      "Works fully in the background — no effort needed",
    ],
  },
];

const ApproachAboutArea: React.FC<ApproachAboutAreaProps> = ({
  subtitle = "Process",
  heading = "A Simple Connection. A Smarter Transformation",
  approachBoxes = defaultApproachBoxes,
}) => {
  return (
    <section className="approach-area-about-page">
      <div className="container large">
        <div className="approach-area-about-page-inner section-spacing">
          {/* HEADER */}
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">{subtitle}</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">{heading}</h2>
              </div>
            </div>
          </div>

          {/* APPROACH BOXES */}
          <div className="approach-wrapper-box">
            <div className="approach-wrapper fade-anim">
              {approachBoxes.map((box, idx) => (
                <div key={idx} className="approach-box">
                  <h2 className="title">
                    {box.title.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < box.title.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                    {box.shapeImage && <Image src={box.shapeImage} alt="image" />}
                  </h2>
                  <div className="approach-list">
                    <ul>
                      {box.list.map((item, li) => (
                        <li key={li}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApproachAboutArea;
