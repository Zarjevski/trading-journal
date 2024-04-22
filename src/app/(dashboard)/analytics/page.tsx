"use client";

import React from "react";
import WLratio from "@/components/analytics/WLratio";
import AccountGrow from "@/components/analytics/AccountGrow";
import { useColorMode } from "@chakra-ui/react";
import { motion as m } from "framer-motion";

const Page = () => {
  const { colorMode } = useColorMode();
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: .85, ease: "easeIn"}}
      className="py-16 px-32 h-[92] w-full "
    >
      <div className="h-[35%] w-full  flex mb-8">
        <div
          className={`h-auto w-1/4 p-8 border shadow ${
            colorMode === "dark" ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-lg capitalize font-medium text-gray-600">
            account balance:
          </h2>
          <h3 className="text-5xl font-bold">79$</h3>
        </div>
      </div>
      <div className="h-[55%] w-full flex gap-8">
        <WLratio colorMode={colorMode} />
        <AccountGrow colorMode={colorMode} />
      </div>
    </m.div>
  );
};

export default Page;
