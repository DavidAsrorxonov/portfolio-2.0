import React from "react";
import highlight from "../lib/utils/highlight";

const Card = ({ title, subtitle, description, quote }) => {
  return (
    <div className="h-[90%] w-[80%] bg-black text-white rounded-3xl shadow-xl px-10 py-12">
      <div className="flex flex-col justify-center h-full space-y-6">
        <h1 className="text-6xl font-bold">{title}</h1>
        {subtitle && (
          <h2 className="text-4xl font-medium text-gray-400">{subtitle}</h2>
        )}
        {Array.isArray(description) ? (
          <div className="space-y-3 text-2xl leading-relaxed text-gray-200">
            {description.map((line, idx) => (
              <p key={idx}>{highlight(line)}</p>
            ))}
          </div>
        ) : (
          <p className="text-lg leading-relaxed text-gray-200">{description}</p>
        )}
        <div className="flex flex-col items-end w-full">
          {quote && (
            <>
              <p className="text-2xl text-gray-400">
                <i>{quote}</i>
              </p>
              <div className="h-0.5 bg-white w-1/3 mt-3"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
