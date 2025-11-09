"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase, ScrollToPlugin, ScrollTrigger, SplitText } from "gsap/all";
import {
  charAnimation,
  fadeAnimation,
  goVisibleAnimation,
  RRTitleAnimation,
  textInvertWithScrollAnimation,
  titleAnimation,
} from "@/utils/title-anim";
import { growAnimation, scaleAnim } from "@/utils/img-anim";
import { wordAnimation } from "@/utils/word-anim";
import { throwableAnimation } from "@/utils/throwable-anim";
import { ctaAnim } from "@/utils/cta-anim";
import { movingTestimonial } from "@/utils/testimonial-anim";
import { circularAnim } from "@/utils/circular-anim";
import { serviceAnimation } from "@/utils/service-anim";
import { aboutAnim } from "@/utils/about-anim";
import { workAnimation } from "@/utils/work-anim";
import { approachAnimationTwo } from "@/utils/approach-anim";

type Props = {
  children: React.ReactNode;
};

export default function DigitalAgencyWrapper({ children }: Props) {
  useGSAP(() => {
    gsap.registerPlugin(CustomEase, ScrollToPlugin, SplitText, ScrollTrigger);
    const timer = setTimeout(() => {
      titleAnimation();
      scaleAnim();
      growAnimation();
      goVisibleAnimation();
      wordAnimation();
      throwableAnimation();
      charAnimation();
      ctaAnim();
      RRTitleAnimation();
      charAnimation();
      movingTestimonial();
      circularAnim();
      serviceAnimation();
      aboutAnim();
      workAnimation();
      fadeAnimation();
      textInvertWithScrollAnimation();
      approachAnimationTwo();
    }, 100);
    return () => clearTimeout(timer);
  }, {});
  return children;
}
