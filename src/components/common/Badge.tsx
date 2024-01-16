import React from "react";

const Badge = ({ text, color }: { text: string; color?: string }) => {
  return (
    <div
      className={`${color} border w-fit text-gray-100 rounded mx-2 py-1 text-xs px-2 flex items-center font-bold`}
    >
      {text}
    </div>
  );
};

export default Badge;
