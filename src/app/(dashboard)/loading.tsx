"use client";

import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { FaSpinner } from "react-icons/fa6";

const Loading = () => {
  const { colorMode } = useColorMode();
  return (
    <section className="w-full h-[92vh] flex justify-center items-center">
      <FaSpinner
        id={"spinner"}
        className={`h-16 w-16 ${
          colorMode === "light" ? "text-black" : "text-white"
        }`}
      />
    </section>
  );
};

export default Loading;
