"use client";

import RulesList from "@/components/home/RulesList";
import { useColorMode } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";
import WLratio from "@/components/home/WLratio";
import RoadTM from "@/components/home/RoadTM";
import { motion } from "framer-motion";

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
      <div
        className={`rounded col-start-1 col-span-3 w-full h-full border p-4 ${
          colorMode === "light"
            ? "text-black bg-white"
            : "bg-gray-800 text-white"
        }`}
      >
        <header className="p-2 capitalize border-b flex justify-between">
          <h1>recent trades</h1>
          <button
            className={`flex items-center capitalize px-4 rounded ${
              colorMode === "light" ? "hover:bg-gray-200" : "hover:bg-gray-700"
            }`}
          >
            <IoAdd className="mr-1" />
            new
          </button>
        </header>
      </div>
    </motion.div>
  );
};

export default Page;
