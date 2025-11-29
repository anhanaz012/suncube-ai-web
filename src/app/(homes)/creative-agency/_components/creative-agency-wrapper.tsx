"use client";
import { aboutAnim } from "@/utils/about-anim";
import { approachAnimationTwo } from "@/utils/approach-anim";
import { circularAnim } from "@/utils/circular-anim";
import { ctaAnim } from "@/utils/cta-anim";
import { growAnimation, scaleAnim } from "@/utils/img-anim";
import { serviceAnimation } from "@/utils/service-anim";
import { movingTestimonial } from "@/utils/testimonial-anim";
import { throwableAnimation } from "@/utils/throwable-anim";
import {
  charAnimation,
  fadeAnimation,
  goVisibleAnimation,
  RRTitleAnimation,
  textInvertWithScrollAnimation,
  titleAnimation,
} from "@/utils/title-anim";
import { wordAnimation } from "@/utils/word-anim";
import { workAnimation } from "@/utils/work-anim";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase, ScrollToPlugin, ScrollTrigger, SplitText } from "gsap/all";

type Props = {
  children: React.ReactNode;
};

export default function CreativeAgencyWrapper({ children }: Props) {
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
