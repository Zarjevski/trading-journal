"use client";

import RulesList from "@/components/home/RulesList";
import { useColorMode } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";
import WLratio from "@/components/home/WLratio";
import RoadTM from "@/components/home/RoadTM";
import { motion } from "framer-motion";
import RecentTrades from "@/components/forms/RecentTrades";

const Page = () => {
  const { colorMode } = useColorMode();
  return (
    <motion.div
      className={`w-full grid grid-cols-4 grid-rows-2 py-16 px-32 gap-12 h-[92vh] ${
        colorMode === "light" ? "bg-gray-100" : null
      }`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 30 }}
    >
      <WLratio colorMode={colorMode} />
      <RoadTM colorMode={colorMode} />
      <RulesList />
      <RecentTrades colorMode={colorMode}/>
    </motion.div>
  );
};

export default Page;
