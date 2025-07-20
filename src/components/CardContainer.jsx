import React from "react";
import Card from "./Card";
import aboutMe from "../constants/about";

const CardContainer = () => {
  return (
    <div className="w-full h-[85%] overflow-x-scroll scroll-smooth snap-x snap-mandatory flex scrollbar-hide">
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
