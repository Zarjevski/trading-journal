"use client";

import RulesList from "@/components/home/RulesList";
import TradesTable from "@/components/trades/TradesTable";
import TopCoins from "@/components/home/TopCoins";
import FearAndGreed from "@/components/home/FearAndGreed";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/framerEffects";

const Page = () => {
  const { colorMode } = useColorMode();
  return (
    <motion.div
      className={`w-full md:grid grid-cols-4 grid-rows-2 py-16 px-32 gap-12 h-[92vh] overflow-y-auto sm:flex xs:flex`}
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={fadeIn.transition}
    >
      <FearAndGreed colorMode={colorMode} />
      <TopCoins />
      <RulesList />
      <TradesTable colorMode={colorMode} title={"Recent Trades"} />
    </motion.div>
  );
};

export default Page;
