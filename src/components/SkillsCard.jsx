import React from "react";
import SkillsItem from "./SkillsItem";

const SkillsCard = ({ section, items }) => {
  return (
    <div className="h-[90%] w-[80%] bg-[#161616] text-white rounded-3xl shadow-xl px-10 py-12">
      <div className="flex flex-col h-full space-y-8">
        <h1 className="text-3xl font-bold text-left">{section}</h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mt-4">
          {items.map((item, index) => (
            <SkillsItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
