"use client";

import React from "react";
import { useColorMode } from "@chakra-ui/react";

const Page = () => {
  const { colorMode } = useColorMode();
  return (
    <section
      className={`w-full h-[92vh] py-16 px-32 flex justify-center items-center`}
    >
      <div
        className={`w-4/6 h-full border shadow ${
          colorMode === "light" ? "bg-white" : "bg-gray-800"
        }`}
      ></div>
    </section>
  );
};

export default Page;
