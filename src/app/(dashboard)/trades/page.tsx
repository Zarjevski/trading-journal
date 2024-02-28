"use client";

import TradesStatCard from "@/components/trades/TradesStatCard";
import TradesTable from "@/components/trades/TradesTable";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useTradeData from "@/hooks/useTradeData";

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
  const data = useTradeData()
  return (
    <section className="h-full w-full p-8 py-16 px-32">
      <motion.div
        className="w-full h-28 flex gap-8 my-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {data.map((stat, index) => {
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
