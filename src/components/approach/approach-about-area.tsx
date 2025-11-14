import Image from "next/image";
import shape from "@/assets/imgs/shape/shape-13.webp";

export default function ApproachAboutArea() {
  return (
    <section className="approach-area-about-page">
      <div className="container large">
        <div className="approach-area-about-page-inner section-spacing">
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">Process</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">
                  A Simple Connection. A Smarter Transformation
                </h2>
              </div>
            </div>
          </div>
          <div className="approach-wrapper-box">
            <div className="approach-wrapper fade-anim">
              <div className="approach-box">
                <h2 className="title">
                  Connection <br />
                  Setup <Image src={shape} alt="image" />
                </h2>
                <div className="approach-list">
                  <ul>
                    <li>Connect your solar system to Suncube AI </li>
                    <li>No new hardware required </li>
                    <li>Instantly syncs with inverters & meters </li>
                    <li>Secure cloud-based onboarding </li>
                    <li>Seamless plug-and-play activation</li>
                  </ul>
                </div>
              </div>
              <div className="approach-box">
                <h2 className="title">
                  Intelligent <br />
                  Analysis <Image src={shape} alt="image" />
                </h2>
                <div className="approach-list">
                  <ul>
                    <li>AI studies your home’s usage patterns </li>
                    <li>Evaluates sunlight, weather & seasonal shifts </li>
                    <li>Learns your daily energy behavior </li>
                    <li>Detects inefficiencies automatically </li>
                    <li>Builds a personalized optimization model </li>
                  </ul>
                </div>
              </div>
              <div className="approach-box">
                <h2 className="title">
                  Continuous <br />
                  Optimization{" "}
                </h2>
                <div className="approach-list">
                  <ul>
                    <li>AI auto-adjusts energy flow </li>
                    <li>Predictive maintenance alerts </li>
                    <li>Real-time performance tracking </li>
                    <li>Smart savings recommendations </li>
                    <li>Works fully in the background — no effort needed </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
