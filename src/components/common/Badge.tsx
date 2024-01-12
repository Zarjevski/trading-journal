import React from "react";

const Badge = ({ text, color }: { text: string; color?: string }) => {
  return (
    <div
      className={`${color} border w-fit rounded mx-2 text-xs px-2 flex items-center font-bold drop-shadow`}
    >
      {text}
    </div>
  );
};

export default Badge;
