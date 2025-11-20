export default function ActuallyArea({
  p1 = "Why Choose",
  p2 = "Suncube AI"
}) {
  return (
    <section className="actually-area">
      <div className="actually-area-inner section-spacing">
        <div className="container">
          <div className="bg-area"></div>
          <h2 className="section-title font-sequelsans-romanbody t_line">
            {p1} <br />
            {p2}
          </h2>
        </div>
      </div>
    </section>
  );
}
