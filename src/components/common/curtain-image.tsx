"use client";
import { useEffect, useRef, useState } from "react";
import "@/assets/css/curtain-image.css";

export default function CurtainBasedImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isVisibleRef = useRef(false);
  const [step, setStep] = useState(0);
  const widthMap = ["500px", "33%", "66%", "100%"];
  const widthValue = widthMap[step];
  const textDisplay = step === 0 ? "block" : "none";
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => (isVisibleRef.current = entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;
    const onWheel = (e: WheelEvent) => {
      if (!isVisibleRef.current) return;
      if (step !== 3 && e.deltaY > 0) {
        e.preventDefault();
        setStep((s) => Math.min(3, s + 1));
        return;
      }
      if (step !== 0 && e.deltaY < 0) {
        e.preventDefault();
        setStep((s) => Math.max(0, s - 1));
        return;
      }
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, [step]);

  return (
    <div className="curtain-wrapper" ref={wrapperRef}>
      <p style={{ display: textDisplay }}>(SUNCUBE)</p>

      <img
        src={src}
        alt={alt}
        className="curtain-img"
        style={{ width: widthValue }}
      />
      <p style={{ display: textDisplay }}>(AI)</p>
    </div>
  );
}
