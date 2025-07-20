import Lottie from "lottie-react";
import ScrollAnim from "../assets/scroll.json";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Scroll component that displays an animated Lottie animation.
 * The animation is initially scaled and faded in using GSAP with a delay.
 * As the user scrolls, the animation fades out based on the scroll position.
 * The animation is wrapped in a centered div container.
 *
 * @returns {ReactElement} A JSX element containing the animated Lottie component.
 */

const Scroll = () => {
  const ScrollAnimRef = useRef(null);

  useEffect(() => {
    const element = ScrollAnimRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 4,
        delay: 3,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      element,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      className="flex items-center justify-center w-full mt-20"
      ref={ScrollAnimRef}
    >
      <Lottie animationData={ScrollAnim} loop={true} />
    </div>
  );
};

export default Scroll;
