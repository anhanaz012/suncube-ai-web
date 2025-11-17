"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
interface Props {
    src:string;
    alt:string
}
export default function CurtainBasedImage({ src, alt } : Props) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start curtain when section becomes visible
      const start = windowHeight;
      const end = -windowHeight * 2; // 3 screens total travel

      const p = Math.min(
        Math.max((rect.top - start) / (end - start), 0),
        1
      );

      setProgress(1 - p); // invert so it opens downward
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const width = 30 + progress * 70;

  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          width: `${width}%`,
          transition: "width 0.2s ease-out",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          priority
        />
      </div>
    </section>
  );
}
