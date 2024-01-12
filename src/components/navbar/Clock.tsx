import React from "react";
import Badge from "../common/Badge";

interface ClockProps {
  status: string;
  market: string;
  time: string;
}

const Clock: React.FC<ClockProps> = ({ status, market, time }) => {
  const color = status !== 'open' ? "bg-red-500" : "bg-green-500"
  return (
    <div className="flex items-center justify-center">
      {market}: {time} <Badge color={color} text={status} />
    </div>
  );
};

export default Clock;
