import React from "react";

const Badge = ({ text, color }: { text: string; color?: string }) => {
  return (
    <div
      className={`${
        color ? color : "bg-gray-500"
      } border w-fit text-gray-100 rounded md:mx-2 md:py-1 text-xs md:px-2 flex items-center font-bold xs:mx-1 xs:p-1`}
    >
      {text}
    </div>
  );
};

export default Badge;
