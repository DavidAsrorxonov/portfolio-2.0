import React from "react";

const SkillsItem = ({ item: { name, Icon, link, description }, index }) => {
  return (
    <div
      key={index}
      className="relative group flex flex-col items-center justify-center space-y-3 p-4 border border-neutral-800 rounded-2xl bg-[#111111] overflow-hidden transition-all duration-300"
    >
      <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] group-hover:before:animate-sheen-diagonal before:rotate-[25deg] pointer-events-none" />

      <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-700">
        <Icon className="w-8 h-8 text-cyan-400" />
      </div>

      <p className="relative z-10 text-sm text-neutral-300 text-center font-medium tracking-wide">
        {name}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 text-xs text-cyan-500 hover:underline"
        >
          Learn more
        </a>
      )}
    </div>
  );
};

export default SkillsItem;
