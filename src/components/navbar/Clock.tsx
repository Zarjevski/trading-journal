import React from "react";
import Badge from "../common/Badge";

interface ClockProps {
  status: string;
  market: string;
  time: string;
}

const Clock: React.FC<ClockProps> = ({ status, market, time }) => {
  const color = status !== 'open' ? "bg-red-500"  : "bg-green-500"
  return (
    <div className="flex items-center justify-center md:font-medium xs:text-xs sm:text-sm md:text-md  ">
      {market}: <span className="sm:hidden xs:hidden md:block lg:block">{time}</span> <Badge color={color} text={status} />
    </div>
  );
};

export default Clock;
