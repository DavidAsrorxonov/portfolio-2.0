import React from "react";

const GuidingLine = ({ id }) => {
  return (
    <div>
      <div className="text-3xl w-24 h-24 flex items-center justify-center bg-gray-500 rounded-full">
        {id}
      </div>
    </div>
  );
};

export default GuidingLine;
