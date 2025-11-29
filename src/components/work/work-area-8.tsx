const WorkAreaEight = ({
  subtitle = "Preview",
  title = (
    <>
      Verified transactions,
      <br /> shown with absolute
      <br /> clarity.
    </>
  ),
  infoList = [
    "Blockchain Verified",
    "Unique TX Hash",
    "Immutable Sale Record",
    "Time-Stamped Events",
  ],
  description = `We present a minimal, trustworthy view of every 
    blockchain-validated event. Each energy sale includes its 
    unique hash, timestamp, and verification status—cleanly 
    displayed without clutter or complexity.`,
}) => {
  return (
    <section className="work-area-work-page">
      <div className="work-area-work-page-inner">
        <div className="container large">
          {/* Section Header */}
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">{subtitle}</span>
              </div>

              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">
                  {title}
                </h2>
              </div>
            </div>
          </div>

          {/* Section Content */}
          <div className="section-content-wrapper fade-anim">
            <div className="info-list">
              <ul>
                {infoList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="section-content">
              <div className="text-wrapper" data-direction="right">
                <p className="text">{description}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkAreaEight;