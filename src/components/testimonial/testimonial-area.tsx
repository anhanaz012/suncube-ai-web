import Image from "next/image";
import React from "react";

const testimonials = [
  {
    text: `“Switching to Solar System’s smart energy solutions dramatically reduced our electricity bills. The AI optimization ensures we use every kilowatt efficiently, and the team guided us at every step.”`,
    name: "Emily Rogers",
    post: "Homeowner, Greenfield",
    icon: "/assets/imgs/icon/icon-3.webp",
    light: false,
  },
  {
    text: `“Our company transitioned to renewable energy seamlessly. The installation was fast, the monitoring system keeps everything optimized, and we’re proud to cut down on carbon emissions.”`,
    name: "David Thompson",
    post: "Operations Manager, EcoTech Inc.",
    icon: "/assets/imgs/icon/icon-3-light.webp",
    light: true,
  },
  {
    text: `“The team’s expertise in solar technology and AI energy management transformed our facility. Energy costs are down, efficiency is up, and the environmental impact is incredible.”`,
    name: "Sophia Martinez",
    post: "Facility Director, SunPower Solutions",
    icon: "/assets/imgs/icon/icon-3.webp",
    light: false,
  },
  {
    text: `“I never thought switching to solar could be this simple. The Solar System team handled everything from assessment to installation, and the ongoing support is top-notch.”`,
    name: "Michael Chen",
    post: "Entrepreneur, Bright Future Co.",
    icon: "/assets/imgs/icon/icon-3-light.webp",
    light: true,
  },
  {
    text: `“Our community project now runs entirely on clean solar energy. The AI-powered monitoring system gives us full control and ensures sustainability for years to come.”`,
    name: "Olivia Patel",
    post: "Project Lead, Solar Village Initiative",
    icon: "/assets/imgs/icon/icon-3.webp",
    light: false,
  },
];

export default function TestimonialArea() {
  return (
    <section className="testimonial-area moving-testimonial">
      <div className="container large">
        <div className="testimonial-area-inner section-spacing-top">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody rr_title_anim">
                  What our clients say about switching to smarter, greener energy.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-wrapper-box section-spacing-bottom">
        <div className="pin">
          <div className="container full-hd">
            <div className="testimonial-wrapper">
              {testimonials.map((t, idx) => (
                <div
                  className={`testimonial-item t-card${t.light ? " light" : ""}`}
                  key={idx}
                >
                  <div className="content">
                    <div className="text-wrapper">
                      <p className="text">{t.text}</p>
                    </div>
                    <div className="author">
                      <div className="meta">
                        <h3 className="name">{t.name}</h3>
                        <span className="post">{t.post}</span>
                      </div>
                      <div className="icon">
                        <Image className="quote-icon" src={t.icon} alt="Quote Icon" width={26} height={21} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
