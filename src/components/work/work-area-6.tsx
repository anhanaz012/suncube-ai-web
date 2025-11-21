import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// project images
import project_4 from "@/assets/imgs/solutions/img1.png";
import project_3 from "@/assets/imgs/solutions/img2.png";
import project_2 from "@/assets/imgs/solutions/img3.png";
import project_1 from "@/assets/imgs/solutions/img4.png";

interface WorkItem {
  title: string;
  image: StaticImageData;
  tags: string;
}

const workItems: WorkItem[] = [
  {
    title: "Blockchain Verification",
    image: project_1,
    tags: "Verified",
  },
  {
    title: "Transaction Hash (TXID)",
    image: project_2,
    tags: "Trace ID",
  },
  {
    title: "Time-Stamped Entry",
    image: project_3,
    tags: "Recorded",
  },
  {
    title: "Status: Immutable",
    image: project_4,
    tags: "Locked",
  },
];

export const WorksWrapperSix = () => {
  return (
    <div className="works-wrapper-6">
      {workItems.map((item, index) => (
        <div className="work-box fade-anim" key={index}>
          <div className="thumb">
            <div
              className="image scale"
              data-cursor-text="View Details"
              data-cursor-text-red
            >
              <Link href="/">
                <Image
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: "auto",
                    minHeight: "350px",
                    maxHeight: "350px",
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="content">
            <h3 className="title">
              <Link href="/portfolio-details">{item.title}</Link>
            </h3>
            <div className="meta">
              <span className="tag">{item.tags}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const WorkAreaSix = () => {
  return (
    <section className="work-area-6">
      <div className="container large">
        <div className="work-area-6-inner">
          <div className="works-wrapper-box">
            <WorksWrapperSix />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkAreaSix;
