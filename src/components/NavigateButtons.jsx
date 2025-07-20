import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const NavigateButtons = () => {
  const navigateButtonsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navigateButtonsRef.current,
      { opacity: 0, scale: 0, x: 0 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: navigateButtonsRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="absolute bottom-6 right-10 z-50" ref={navigateButtonsRef}>
      <div className="flex gap-3">
        <button className="flex items-center justify-center h-12 w-12 rounded-full bg-[#333335] hover:bg-[#444446] transition-colors">
          <ChevronLeft size={30} strokeWidth={3} className="text-white" />
        </button>

        <button className="flex items-center justify-center h-12 w-12 rounded-full bg-[#333335] hover:bg-[#444446] transition-colors">
          <ChevronRight size={30} strokeWidth={3} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default NavigateButtons;
