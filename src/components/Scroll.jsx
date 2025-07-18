import Lottie from "lottie-react";
import ScrollAnim from "../assets/scroll.json";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Scroll = () => {
  const ScrollAnimRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ScrollAnimRef.current,
      { opacity: 0, scale: 0, y: 0 },
      { opacity: 1, scale: 1, y: 0, duration: 4, delay: 3 }
    );
  });

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
