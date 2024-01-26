import React from "react";
import { motion } from "framer-motion";

interface StatCardProps {
  icon: any;
  title: string;
  data: string;
  colorMode: string;
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const TradesStatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  data,
  colorMode,
}) => {
  return (
    <motion.article variants={item}
      className={`border rounded w-1/4 flex shadow ${
        colorMode === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="h-full w-1/3 flex items-center justify-center">
        <div
          className={`w-20 h-20 flex items-center justify-center rounded-full ${
            colorMode === "light" ? "bg-gray-100" : "bg-gray-600"
          }`}
        >
          {icon}
        </div>
      </div>
      <div className="h-full w-2/3 flex flex-col justify-center capitalize">
        <h2 className="text-md">{title}:</h2>
        <h1 className="font-bold text-lg">{data}</h1>
      </div>
    </motion.article>
  );
};

export default TradesStatCard;
