import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNumberOfChildren } from "../context/NumberOfChildrenContext";

/**
 * NavigateButtons is a component that displays two navigation buttons, one for previous and one for next.
 * The buttons are positioned at the bottom right of the screen and are animated in when the user scrolls to the bottom of the page.
 * The component uses the `gsap` library to animate the opacity, scale and position of the buttons.
 * The buttons are wrapped in a `div` element with a class of "absolute bottom-6 right-10 z-50" to position them at the bottom right of the screen with a z-index of 50.
 * The buttons themselves are wrapped in a `div` element with a class of "flex gap-3" to display them inline with a gap of 3px.
 * Each button is a `button` element with a class of "flex items-center justify-center h-12 w-12 rounded-full bg-[#333335] hover:bg-[#444446] transition-colors" to style it as a rounded button with a background color of #333335 and a hover background color of #444446.
 * The buttons contain a `ChevronLeft` and `ChevronRight` component from the `lucide-react` library to display the navigation icons.
 * The component uses the `useRef` hook to create a reference to the `div` element with the class of "absolute bottom-6 right-10 z-50".
 * The component uses the `useEffect` hook to animate the buttons in when the user scrolls to the bottom of the page.
 * The `useEffect` hook takes a function as its first argument which is called when the component mounts and when the user scrolls to the bottom of the page.
 * The function takes no arguments and returns no value.
 * The `useEffect` hook takes an array of dependencies as its second argument, which in this case is an empty array.
 */
const NavigateButtons = ({ scrollContainerRef }) => {
  const navigateButtonsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { numberOfChildren } = useNumberOfChildren();

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

  useEffect(() => {
    /**
     * Updates the state of the navigation buttons based on the current scroll position
     * of the scroll container.
     *
     * @function updateScrollButtons
     * @returns {undefined}
     */
    const updateScrollButtons = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
    }
  }, [scrollContainerRef]);

  /**
   * Scrolls the container in the specified direction by the width of the container.
   *
   * @function scroll
   * @param {string} direction - The direction to scroll, either "left" or "right".
   *   If "left", the container scrolls to the left. If "right", the container scrolls to the right.
   * @returns {undefined}
   */

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-6 right-10 z-50" ref={navigateButtonsRef}>
      <div className="flex gap-3">
        <button
          className={`flex items-center justify-center h-12 w-12 rounded-full ${
            canScrollLeft
              ? "bg-[#333335] hover:bg-[#444446]"
              : "bg-[#1f1f1f] cursor-not-allowed"
          }  transition-colors`}
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <ChevronLeft size={30} strokeWidth={3} className="text-white" />
        </button>

        <button
          className={`flex items-center justify-center h-12 w-12 rounded-full ${
            canScrollRight
              ? "bg-[#333335] hover:bg-[#444446]"
              : "bg-[#1f1f1f] cursor-not-allowed"
          }  transition-colors`}
          onClick={() => {
            scroll("right");
            console.log(numberOfChildren);
          }}
          disabled={!canScrollRight}
        >
          <ChevronRight size={30} strokeWidth={3} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default NavigateButtons;
