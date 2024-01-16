"use client";

import TradesStatCard from "@/components/trades/TradesStatCard";
import TradesTable from "@/components/trades/TradesTable";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaTrophy, FaEye, FaDollarSign, FaGrimace } from "react-icons/fa";

const dummyData = [
  {
    title: "most profit",
    icon: <FaTrophy className="w-8 h-8" />,
    data: "200$",
  },
  {
    title: "looking for",
    icon: <FaEye className="w-8 h-8" />,
    data: "SHORTS",
  },
  {
    title: "avarege profit",
    icon: <FaDollarSign className="w-8 h-8" />,
    data: "115%",
  },
  {
    title: "biggest loss",
    icon: <FaGrimace className="w-8 h-8" />,
    data: "70$",
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const Page = () => {
  const { colorMode } = useColorMode();
  return (
    <section className="h-full w-full p-8 py-16 px-32">
      <motion.div
        className="w-full h-28 flex gap-8 my-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {dummyData.map((stat, index) => {
          const { icon, title, data } = stat;
          return (
            <TradesStatCard
              key={index}
              title={title}
              data={data}
              icon={icon}
              colorMode={colorMode}
            />
          );
        })}
      </motion.div>
      <TradesTable title={"all trades"} colorMode={colorMode} />
    </section>
  );
};

export default Page;
