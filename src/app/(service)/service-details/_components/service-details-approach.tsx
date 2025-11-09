interface ApproachItem {
  number: string;
  title: string;
  text: string;
}

const approachItems: ApproachItem[] = [
  {
    number: "01",
    title: "Assessment & Planning",
    text: "We analyze your energy needs and site potential to design a solar solution tailored for your home or business.",
  },
  {
    number: "02",
    title: "Solar Panel Installation",
    text: "Expert installation of high-efficiency solar panels, ensuring maximum energy capture and minimal disruption.",
  },
  {
    number: "03",
    title: "AI Energy Optimization",
    text: "Integrating smart energy management systems that monitor, predict, and optimize usage for efficiency and cost savings.",
  },
  {
    number: "04",
    title: "Monitoring & Support",
    text: "Continuous monitoring and maintenance to ensure your solar system performs at its best year-round.",
  },
];

const ServiceDetailsApproach = () => {
  return (
    <section className="approach-area-service-details-page">
      <div className="container large">
        <div className="approach-area-service-details-page-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper fade-anim" data-direction="left">
                <span className="section-subtitle">
                  Our step-by-step <br />
                  solar implementation process
                </span>
              </div>
              <div className="title-wrapper fade-anim" data-direction="right">
                <h2 className="section-title font-sequelsans-romanbody">
                  From initial assessment to full AI-optimized energy management, we guide you at every step toward smarter, greener energy.
                </h2>
              </div>
            </div>
          </div>
          <div className="approach-wrapper-box">
            <span className="steps fade-anim">04</span>
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
