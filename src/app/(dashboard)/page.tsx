"use client";

import RulesList from "@/components/home/RulesList";
import { useColorMode } from "@chakra-ui/react";
import TradesTable from "@/components/trades/TradesTable";
import TopCoins from "@/components/home/TopCoins";
import FearAndGreed from "@/components/home/FearAndGreed";
import { motion } from "framer-motion";

const Page = () => {
  const { colorMode } = useColorMode();
  return (
    <motion.div
      className={`w-full grid grid-cols-4 grid-rows-2 py-16 px-32 gap-12 h-[92vh] overflow-y-auto`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 30 }}
    >
      <FearAndGreed colorMode={colorMode} />
      <TopCoins />
      <RulesList />
      <TradesTable colorMode={colorMode} title={"Recent Trades"} />
    </motion.div>
  );
};

export default Page;
