import React from "react";
import { useNumberOfChildren } from "../context/NumberOfChildrenContext";

const TotalCardCount = () => {
  const { numberOfChildren, activeIndex } = useNumberOfChildren();

  return (
    <div className="absolute w-fit px-4 h-12 top-10 right-4 text-white bg-[#404040] rounded-full">
      <div className="flex items-center justify-center h-full text-lg">
        {activeIndex + 1} out of {numberOfChildren}
      </div>
    </div>
  );
};

export default TotalCardCount;
