import { Info } from "lucide-react";
import React, { useState } from "react";

const SkillsItem = ({ item: { name, Icon, link, description }, index }) => {
  const [itemDescriptionModal, setItemDescriptionModal] = useState(false);
  const info = description;

  return (
    <div>
      <div
        key={index}
        className="flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform duration-300"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
          <Icon className="w-full h-full" />
        </div>
        <div
          onMouseEnter={() => setItemDescriptionModal(true)}
          onMouseLeave={() => setItemDescriptionModal(false)}
        >
          <Info />
        </div>
        <p className="text-sm text-center">{name}</p>
        <p>{link}</p>
      </div>

      {itemDescriptionModal && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-red-500 p-4">
          <p>{info}</p>
        </div>
      )}
    </div>
  );
};

export default SkillsItem;
