/* eslint-disable @next/next/no-img-element */

interface ParallaxImgTwoProps {
  src?: string;
  alt?: string;
  speed?: string; // data-speed as string (HTML rule)
  className?: string; // optional: allow custom classes
}

export default function ParallaxImgTwo({
  src = "https://img.freepik.com/premium-photo/worker-sunset-engineer-solar-panel-construction-renewable-energy-electricity_146482-12103.jpg",
  alt = "image",
  speed = "0.1",
  className = "w-100",
}: ParallaxImgTwoProps) {
  return (
    <div className="image-wrapper parallax-view">
      <img
        className={className}
        src={src}
        alt={alt}
        data-speed={speed}
      />
    </div>
  );
}
