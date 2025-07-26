import React from "react";
import { useNumberOfChildren } from "../context/NumberOfChildrenContext";

const TotalCardCount = () => {
  const { numberOfChildren, activeIndex } = useNumberOfChildren();

  return (
    <div className="absolute w-fit px-6 h-12 top-10 right-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
      <div className="flex items-center justify-center h-full text-lg text-white font-medium">
        {activeIndex + 1} out of {numberOfChildren}
      </div>
    </div>
  );
};

export default TotalCardCount;
