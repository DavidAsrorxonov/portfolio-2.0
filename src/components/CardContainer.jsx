import React from "react";
import Card from "./Card";
import aboutMe from "../constants/about";

/**
 * A container component that renders a scrollable list of cards.
 * Each card represents a section of information about the user,
 * such as "About Me", "Hobbies", and "Goals". The cards are displayed
 * horizontally and can be navigated using smooth scrolling.
 * Utilizes TailwindCSS classes for styling and layout.
 */

const CardContainer = ({ scrollRef }) => {
  return (
    <div
      className="w-full h-[85%] overflow-x-scroll scroll-smooth snap-x snap-mandatory flex scrollbar-hide"
      ref={scrollRef}
    >
      {aboutMe.map((card) => (
        <div
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
