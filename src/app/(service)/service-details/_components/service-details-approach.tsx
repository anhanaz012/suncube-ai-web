interface ApproachItem {
  number: string;
  title: string;
  text: string;
}

const approachItems: ApproachItem[] = [
  {
    number: "01",
    title: "Site Intelligence & Feasibility ",
    text: "We begin by digitally mapping your location using AI-based satellite assessment tools. This allows us to calculate sunlight potential, roof geometry, and optimal installation angles — ensuring your system is built on data, not assumptions. ",
  },
  {
    number: "02",
    title: " Design & Simulation",
    text: "Our engineers model your system in 3D and run performance simulations under different weather, load, and usage conditions. This predictive modeling guarantees efficiency before a single panel is installed.",
  },
  {
    number: "03",
    title: "Installation & Grid Sync",
    text: "High-efficiency solar panels and smart inverters are installed with precision alignment and seamless grid synchronization — minimizing downtime and maximizing immediate energy generation. ",
  },
  {
    number: "04",
    title: "Performance Intelligence & Upgrades ",
    text: "Once live, your system enters Suncube’s AI monitoring network — continuously learning, adapting, and optimizing output. Performance reports and upgrade recommendations are delivered automatically to keep you at peak efficiency year-round.",
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
                  Engineered Precision. <br />
                  Powered by Intelligence.
                </span>
              </div>
              <div className="title-wrapper fade-anim" data-direction="right">
                <h2 className="section-title font-sequelsans-romanbody">
                  Every project we deliver follows a clear, data-driven process
                  — designed to combine solar craftsmanship with the predictive
                  intelligence of AI. From concept to continuous performance,
                  Suncube AI ensures that every watt works harder, smarter, and
                  cleaner.
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
