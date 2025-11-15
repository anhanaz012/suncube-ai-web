// interface ApproachItem {
//   number: string;
//   title: string;
//   text: string;
// }

// const approachItems: ApproachItem[] = [
//   {
//     number: "01",
//     title: "Always-On Optimization",
//     text: "Your system self-adjusts every minute of the day — no manual changes needed. AI continuously enhances performance to extract maximum energy from every ray.",
//   },
//   {
//     number: "02",
//     title: "Smart Savings Engine",
//     text: "AI fine-tunes your energy flow to reduce your electricity bills and increase long-term ROI. Every micro-adjustment compounds into significant yearly savings.",
//   },
//   {
//     number: "03",
//     title: "Predictive Care Alerts",
//     text: "Your solar system tells you what it needs — before it needs it. AI detects early signs of dust, inefficiencies, or hardware issues and alerts you proactively.",
//   },
//   {
//     number: "04",
//     title: "Real-Time Impact Tracking",
//     text: "Track your CO₂ savings, power output, and environmental contribution in real time. Every watt you produce has a visible, measurable impact.",
//   },
//   {
//     number: "05",
//     title: "Unified Intelligent Dashboard",
//     text: "All your insights — from generation to health status — live in one clean, elegant dashboard built for absolute clarity and control.",
//   },
// ];

// const ServiceDetailsApproach = () => {
//   return (
//     <section className="approach-area-service-details-page">
//       <div className="container large">
//         <div className="approach-area-service-details-page-inner section-spacing">
//           <div className="section-header">
//             <div className="section-title-wrapper">
//               <div className="subtitle-wrapper fade-anim" data-direction="left">
//                 <span className="section-subtitle">
//                   Benefits for. <br />
//                   Homeowners
//                 </span>
//               </div>
//               <div className="title-wrapper fade-anim" data-direction="right">
//                 <h2 className="section-title font-sequelsans-romanbody">
//                   With Suncube AI, your home runs on intelligent automation —
//                   optimizing output 24/7, reducing waste, predicting
//                   maintenance, and turning solar data into meaningful,
//                   easy-to-understand insights. Let the AI handle the complexity
//                   while you enjoy seamless, reliable power.
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div className="approach-wrapper-box">
//             <span className="steps fade-anim">05</span>
//             <div className="approach-wrapper fade-anim" data-direction="right">
//               {approachItems.map((item, index) => (
//                 <div key={index} className="approach-box">
//                   <span className="number">{item.number}</span>
//                   <h3 className="title">{item.title}</h3>
//                   <p className="text">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceDetailsApproach;
import React from "react";

export interface ApproachItem {
  number: string;
  title: string;
  text: string;
}

// Default approach items
const defaultApproachItems: ApproachItem[] = [
  {
    number: "01",
    title: "Always-On Optimization",
    text: "Your system self-adjusts every minute of the day — no manual changes needed. AI continuously enhances performance to extract maximum energy from every ray.",
  },
  {
    number: "02",
    title: "Smart Savings Engine",
    text: "AI fine-tunes your energy flow to reduce your electricity bills and increase long-term ROI. Every micro-adjustment compounds into significant yearly savings.",
  },
  {
    number: "03",
    title: "Predictive Care Alerts",
    text: "Your solar system tells you what it needs — before it needs it. AI detects early signs of dust, inefficiencies, or hardware issues and alerts you proactively.",
  },
  {
    number: "04",
    title: "Real-Time Impact Tracking",
    text: "Track your CO₂ savings, power output, and environmental contribution in real time. Every watt you produce has a visible, measurable impact.",
  },
  {
    number: "05",
    title: "Unified Intelligent Dashboard",
    text: "All your insights — from generation to health status — live in one clean, elegant dashboard built for absolute clarity and control.",
  },
];

interface ServiceDetailsApproachProps {
  subtitle?: string; // e.g., "Benefits for Homeowners"
  heading?: string; // main h2 text
  approachItems?: ApproachItem[]; // optional, overrides default
  steps?: string; // number of steps, optional
}

const ServiceDetailsApproach: React.FC<ServiceDetailsApproachProps> = ({
  subtitle = `Benefits for. \nHomeowners`,
  heading = `With Suncube AI, your home runs on intelligent automation — optimizing output 24/7, reducing waste, predicting maintenance, and turning solar data into meaningful, easy-to-understand insights. Let the AI handle the complexity while you enjoy seamless, reliable power.`,
  approachItems = defaultApproachItems,
  steps = "05",
}) => {
  return (
    <section className="approach-area-service-details-page">
      <div className="container large">
        <div className="approach-area-service-details-page-inner section-spacing">

          {/* HEADER */}
          <div className="section-header">
            <div className="section-title-wrapper">

              <div className="subtitle-wrapper fade-anim" data-direction="left">
                <span className="section-subtitle">
                  {subtitle.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </span>
              </div>

              <div className="title-wrapper fade-anim" data-direction="right">
                <h2 className="section-title font-sequelsans-romanbody">{heading}</h2>
              </div>

            </div>
          </div>

          {/* APPROACH BOXES */}
          <div className="approach-wrapper-box">
            <span className="steps fade-anim">{steps}</span>
            <div className="approach-wrapper fade-anim" data-direction="right">
              {approachItems.map((item, index) => (
                <div key={index} className="approach-box">
                  <span className="number">{item.number}</span>
                  <h3 className="title">{item.title}</h3>
                  <p className="text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsApproach;
