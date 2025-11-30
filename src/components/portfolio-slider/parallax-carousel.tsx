"use client";
import Image from "next/image";
import { parallaxSliderAnimation } from "@/utils/parallax-slider";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

interface PortfolioItem {
  imageSrc: string;
  title: string;
  tags: string;
  date: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    imageSrc: "/assets/imgs/slider/img1.png",
    title: "Gayathri Junior College",
    tags: "Chowtuppal Hyderabad, 10kW ",
    date: "2020",
  },
  {
    imageSrc: "/assets/imgs/slider/img2.png",
    title: "Gayathri Degree College",
    tags: "Chowtuppal Hyderabad, 5kW ",
    date: "2020",
  },
  {
    imageSrc: "/assets/imgs/slider/img3.png",
    title: "Moshka Farms",
    tags: "Gokaram Nalgonda, 10kW",
    date: "2023",
  },
  {
    imageSrc: "/assets/imgs/slider/image.png",
    title: "Cubefore Office",
    tags: "Chintalkunta Hyderabad, 10kW",
    date: "2024",
  },
  {
    imageSrc: "/assets/imgs/slider/img5.png",
    title: "R.P Reddy House",
    tags: "Chintalkunta Hyderabad, 6kW",
    date: "2024",
  },
  {
    imageSrc: "/assets/imgs/slider/img6.png",
    title: "A.K Resorts",
    tags: "Koheda Rangareddy, 20kW",
    date: "2025",
  }
];

export default function ParallaxCarousel() {
  useGSAP(() => {
    parallaxSliderAnimation();
  }, {});
  return (
    <section className="parallax-slider-wrapper">
      <div className="parallax-slider">
        <div className="parallax-slider-inner">
          {portfolioItems.map((item, index) => (
            <div key={index} className="parallax-slider-item">
              <Link href="/404">
                <Image
                  className="image"
                  data-cursor-text="Drag"
                  data-cursor-text-red
                  src={item.imageSrc}
                  alt="image"
                  width={750}
                  height={358}
                />
              </Link>

              <div className="content">
                <h3 className="title">
                  <Link href="/portfolio-details">{item.title}</Link>
                </h3>
                <div className="meta">
                  <span className="tag">{item.tags}</span>
                  <span className="date">({item.date})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
