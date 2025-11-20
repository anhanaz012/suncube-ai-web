// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const services = [
//   {
//     number: "01",
//     title: "Residential Solar + AI ",
//     price: "Starting at $12,999",
//     features: [
//       "Real-time monitoring",
//       "Predictive maintenance ",
//       "AI-based optimization for home energy flow",
//     ],
//   },
//   {
//     number: "02",
//     title: "Commercial & Industrial Solar ",
//     price: "Custom Pricing",
//     features: [
//       "Enterprise-grade solar optimization",
//       "Predictive maintenance for uptime ",
//       "Smart grid export and billing ",
//     ],
//   },
//   {
//     number: "03",
//     price: "Revenue Sharing Model",
//     title: "Smart Grid & Virtual Power Plant",
//     features: [
//       "AI-based grid perception and control",
//       "Load balancing automation",
//       "Virtual power plant coordination",
//     ],
//   },
//   {
//     number: "04",
//     price: "$99 / Month",
//     title: "AI Monitoring & Predictive Maintenance",
//     features: [
//       "24/7 AI-based performance monitoring",
//       "Predictive maintenance forecasting",
//       "Automatic fault detection",
//     ],
//   },
//   {
//     number: "05",
//     title: "Data Insights & Forecasting",
//     price: "$49 / Month",
//     features: [
//       "AI-driven energy forecasting",
//       "Weather-based performance prediction",
//       "Real-time system insights and reports",
//     ],
//   },
//   {
//     number: "06",
//     title: "Cloud Dashboard",
//     price: "Included with All Plans",
//     features: [
//       "Centralized cloud-based monitoring",
//       "Secure access control and analytics ",
//       "Live performance visualization",
//     ],
//   },
// ];

// type IProps = {
//   wrapperCls?: string;
// };

// const ServiceAreaFour = ({ wrapperCls }: IProps) => {
//   return (
//     <section className="service-area-4">
//       <div className="container large">
//         <div className="service-area-4-inner">
//           <div className={`services-wrapper-box ${wrapperCls || ""}`}>
//             <div className="services-wrapper-4">
//               {services.map((service, index) => (
//                 <div className="service-box fade-anim" key={index}>
//                   <span className="number">{service.number}</span>
//                   <h2 className="service-title">
//                     <Link href="/service-details">{service.title}</Link>
//                   </h2>
//                   <p
//                     style={{
//                       fontWeight: "bold",
//                       color: "#ff6a3a",
//                     }}
//                   >
//                     {service.price}
//                   </p>
//                   <div className="feature-list">
//                     <ul>
//                       {service.features.map((feature, i) => (
//                         <li key={i} className="cursor-pointer">
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}

//               <div className="service-thumb">
//                 <Image
//                   src="/assets/imgs/project/image.png"
//                   alt="image not found"
//                   width={1920}
//                   height={970}
//                   style={{ height: "auto", maxHeight: "800px" }}
//                 />
//                 <div className="service-thumb-line-wrapper">
//                   {Array.from({ length: 11 }).map((_, i) => (
//                     <span key={i}></span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceAreaFour;
// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const services = [
//   {
//     number: "01",
//     title: "Art Direction",
//     features: [
//       "Design Strategy",
//       "Prototyping & Wireframe",
//       "Design system",
//       "Usability testing",
//     ],
//   },
//   {
//     number: "02",
//     title: "Brand Guideline",
//     features: [
//       "Design Strategy",
//       "Prototyping & Wireframe",
//       "Design system",
//       "Usability testing",
//     ],
//   },
//   {
//     number: "03",
//     title: "Art Direction",
//     features: [
//       "Design Strategy",
//       "Prototyping & Wireframe",
//       "Design system",
//       "Usability testing",
//     ],
//   },
//   {
//     number: "04",
//     title: "Brand Guideline",
//     features: [
//       "Design Strategy",
//       "Prototyping & Wireframe",
//       "Design system",
//       "Usability testing",
//     ],
//   },
// ];

// type IProps = {
//   wrapperCls?: string;
// };

// const ServiceAreaFour = ({wrapperCls}:IProps) => {
//   return (
//     <section className="service-area-4">
//       <div className="container large">
//         <div className="service-area-4-inner">
//           <div className={`services-wrapper-box ${wrapperCls || ""}`}>
//             <div className="services-wrapper-4">
//               {services.map((service, index) => (
//                 <div className="service-box fade-anim" key={index}>
//                   <span className="number">{service.number}</span>
//                   <h2 className="title">
//                     <Link href="/service-details">{service.title}</Link>
//                   </h2>
//                   <div className="feature-list">
//                     <ul>
//                       {service.features.map((feature, i) => (
//                         <li key={i}>{feature}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}

//               <div className="service-thumb">
//                 <Image
//                   src="/assets/imgs/project/image-29.webp"
//                   alt="image not found"
//                   width={1920}
//                   height={970}
//                   style={{height:"auto"}}
//                 />
//                 <div className="service-thumb-line-wrapper">
//                   {Array.from({ length: 11 }).map((_, i) => (
//                     <span key={i}></span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceAreaFour;

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Service = {
  number?: string;
  title?: string;
  price?: string;
  features?: string[];
};

type IProps = {
  wrapperCls?: string;
  services?: Service[]; // dynamic services list
  imageSrc?: string; // dynamic image
  imageAlt?: string; // dynamic alt
  imageWidth?: number;
  imageHeight?: number;
  linesCount?: number; // number of vertical lines
};

const DEFAULT_SERVICES: Service[] = [
  {
    number: "01",
    title: "Data Encryption",
    features: [
      "Protects all energy and billing data",
      "Secures every web and app request",
      "Shields information from misuse",
      "Meets strict industry standards",
    ],
  },
  {
    number: "02",
    title: "Audit Logging",
    features: [
      "Tracks all user and system actions",
      "Records edits, downloads, and updates",
      "Gives admins full compliance visibility",
      "Maintains accountability across roles",
    ],
  },
  {
    number: "03",
    title: "Secure APIs",
    features: [
      "Encrypted communication channels",
      "Verified endpoints for grid data",
      "Strong authentication on every call",
      "Built for large-scale integrations",
    ],
  },
  {
    number: "04",
    title: "Role Control",
    features: [
      "Customer, Technician, Admin levels",
      "Data access based on permissions",
      "Prevents unauthorized activity",
      "Ensures safe multi-user operations",
    ],
  },
];

const ServiceAreaFour = ({
  wrapperCls = "",
  services = DEFAULT_SERVICES,
  imageSrc = "/assets/imgs/project/image.png",
  imageAlt = "image not found",
  imageWidth = 1920,
  imageHeight = 970,
  linesCount = 11,
}: IProps) => {
  return (
    <section className="service-area-4">
      <div className="container large">
        <div className="service-area-4-inner">
          <div className={`services-wrapper-box ${wrapperCls}`}>
            <div className="services-wrapper-4">
              {services.map((service, index) => (
                <div className="service-box fade-anim" key={index}>
                  <span className="number">{service.number || "--"}</span>

                  <h2 className="service-title">
                    <Link href="/service-details">
                      {service.title || "Untitled Service"}
                    </Link>
                  </h2>

                  {service.price && (
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#ff6a3a",
                      }}
                    >
                      {service.price || ""}
                    </p>
                  )}

                  <div className="feature-list">
                    <ul>
                      {(service.features || []).map((feature, i) => (
                        <li key={i} className="cursor-pointer">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* IMAGE */}
              <div className="service-thumb">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={imageWidth}
                  height={imageHeight}
                  style={{ height: "auto", maxHeight: "800px" }}
                />

                {/* LINES */}
                <div className="service-thumb-line-wrapper">
                  {Array.from({ length: linesCount }).map((_, i) => (
                    <span key={i}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaFour;
