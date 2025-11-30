import Link from "next/link";

export default function AboutTwo() {
  return (
    <section className="about-area-2">
      <div className="container large">
        <div className="about-area-2-inner section-spacing-top">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody rr_title_anim">
                  Real Outcomes Delivered Across Every Solar Segment
                </h2>
              </div>
            </div>
          </div>
          <div className="section-content section-spacing-top">
            <div className="year-wrapper">
              <h2 className="year-since">
                <span className="is-fading">
                  <span className="first-text">Solar</span> - Made
                </span>
                <span className="last-text">Better</span>
              </h2>
            </div>
            <div className="text-wrapper">
              <p className="text">
                These featured deployments showcase how Suncube AI improves
                performance across real-world solar sites. From residential
                homes using AI monitoring and predictive maintenance, to
                commercial facilities reducing downtime with automated
                diagnostics, to industrial operators using blockchain-secure
                records and dynamic grid control—each case demonstrates higher
                uptime, cleaner output, and measurable financial and
                sustainability gains.
              </p>
            </div>
            <div className="btn-wrapper">
              <Link href="/about" className="rr-btn">
                <span className="btn-wrap">
                  <span className="text-one">View All Case Studies</span>
                  <span className="text-two">View All Case Studies</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
