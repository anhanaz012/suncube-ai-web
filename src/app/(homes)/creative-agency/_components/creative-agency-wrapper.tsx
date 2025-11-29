"use client";
<<<<<<< HEAD
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
=======
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase, ScrollToPlugin, ScrollTrigger, SplitText } from "gsap/all";
import {
  charAnimation,
  fadeAnimation,
>>>>>>> c684cb6b0ccd4cd31c1810b14f395d143d96d1dd
  RRTitleAnimation,
  textInvertWithScrollAnimation,
  titleAnimation,
} from "@/utils/title-anim";
<<<<<<< HEAD
import { wordAnimation } from "@/utils/word-anim";
import { workAnimation } from "@/utils/work-anim";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase, ScrollToPlugin, ScrollTrigger, SplitText } from "gsap/all";
=======
import { movingTestimonial } from "@/utils/testimonial-anim";
import { circularAnim } from "@/utils/circular-anim";
import { serviceAnimation, serviceAnimationTwo } from "@/utils/service-anim";
import { ctaAnim } from "@/utils/cta-anim";
import { aboutAnim } from "@/utils/about-anim";
import { workAnimation } from "@/utils/work-anim";
import { throwableAnimation } from "@/utils/throwable-anim";
import { growAnimation } from "@/utils/img-anim";
>>>>>>> c684cb6b0ccd4cd31c1810b14f395d143d96d1dd

type Props = {
  children: React.ReactNode;
};

export default function CreativeAgencyWrapper({ children }: Props) {
  useGSAP(() => {
    gsap.registerPlugin(CustomEase, ScrollToPlugin, SplitText, ScrollTrigger);
    const timer = setTimeout(() => {
<<<<<<< HEAD
      titleAnimation();
      scaleAnim();
      growAnimation();
      goVisibleAnimation();
      wordAnimation();
      throwableAnimation();
      charAnimation();
      ctaAnim();
=======
>>>>>>> c684cb6b0ccd4cd31c1810b14f395d143d96d1dd
      RRTitleAnimation();
      charAnimation();
      movingTestimonial();
      circularAnim();
      serviceAnimation();
<<<<<<< HEAD
      aboutAnim();
      workAnimation();
      fadeAnimation();
      textInvertWithScrollAnimation();
      approachAnimationTwo();
=======
      ctaAnim();
      aboutAnim();
      workAnimation();
      titleAnimation();
      throwableAnimation();
      serviceAnimationTwo();
      fadeAnimation();
      growAnimation();
      textInvertWithScrollAnimation();
>>>>>>> c684cb6b0ccd4cd31c1810b14f395d143d96d1dd
    }, 100);
    return () => clearTimeout(timer);
  }, {});
  return children;
}
