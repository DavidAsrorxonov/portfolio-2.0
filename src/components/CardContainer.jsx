import React, { useEffect, useRef } from "react";
import Card from "./Card";
import aboutMe from "../constants/about";
import { useNumberOfChildren } from "../context/NumberOfChildrenContext";

/**
 * A container component that renders a scrollable list of cards.
 * Each card represents a section of information about the user,
 * such as "About Me", "Hobbies", and "Goals". The cards are displayed
 * horizontally and can be navigated using smooth scrolling.
 * Utilizes TailwindCSS classes for styling and layout.
 */

const CardContainer = ({ scrollRef }) => {
  const { setActiveIndex } = useNumberOfChildren();
  const itemsRefs = useRef([]);

  useEffect(() => {
    itemsRefs.current = itemsRefs.current.slice(0, aboutMe.length);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.1,
      }
    );

    itemsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  }, [scrollRef]);

  return (
    <div
      className="w-full h-[85%] overflow-x-scroll scroll-smooth snap-x snap-mandatory flex scrollbar-hide"
      ref={scrollRef}
    >
      {aboutMe.map((card, index) => (
        <div
          ref={(el) => (itemsRefs.current[index] = el)}
          data-index={index}
          key={card.id}
          className="snap-center min-w-full flex justify-center items-center"
        >
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
