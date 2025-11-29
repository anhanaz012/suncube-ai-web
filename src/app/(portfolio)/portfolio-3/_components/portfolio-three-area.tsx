import Image from "next/image";
import Link from "next/link";

interface FeaturedWorkItem {
  title: string;
  image: string;
  tag: string;
  thumbExtraClass?: string;
}

const featuredWorks: FeaturedWorkItem[] = [
  {
    title: "Today's Energy Snapshot",
    image: "/assets/imgs/solutions/img3.png",
    tag: "Live Data",
  },
  {
    title: "Total Revenue Update",
    image: "/assets/imgs/solutions/img14.png",
    tag: "Daily Earnings",
    thumbExtraClass: "mt--150",
  },
  {
    title: "Grid Units Sold",
    image: "/assets/imgs/solutions/image.png",
    tag: "Real Count",
  },
];

const PortfolioThreeWorkArea = () => {
  return (
    <section className="work-area-work-page">
      <div className="work-area-work-page-inner">
        <div className="works-wrapper-box">
          <div className="container large">
            <div className="featured-work-wrapper-2">
              {featuredWorks.map((work, index) => (
                <div key={index} className="featured-work-box fade-anim">
                  <div className={`thumb ${work.thumbExtraClass || ""}`}>
                    <span></span>
                    <div
                      className="image"
                      data-cursor-text="View"
                      data-cursor-text-red
                    >
                      <Link href="/portfolio-details">
                        <Image
                          src={work.image}
                          alt="port-img"
                          width={750}
                          height={900}
                          style={{ height: "auto" }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="title">
                      <Link href="/portfolio-details">{work.title}</Link>
                    </h3>
                    <div className="meta">
                      <span className="tag">{work.tag}</span>
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
};

export default PortfolioThreeWorkArea;
