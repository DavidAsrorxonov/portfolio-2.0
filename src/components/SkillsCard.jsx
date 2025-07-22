import React from "react";

const SkillsCard = ({ section, items }) => {
  return (
    <div className="h-[90%] w-[80%] bg-[#161616] text-white rounded-3xl shadow-xl px-10 py-12">
      <div className="flex flex-col h-full space-y-8">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-left">{section}</h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mt-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                <item.Icon className="w-full h-full" />
              </div>
              <p className="text-sm text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
