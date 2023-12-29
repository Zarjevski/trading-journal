"use client";

import React from "react";
import { useColorMode } from "@chakra-ui/react";

const Loading = () => {
  const { colorMode } = useColorMode();
  return (
    <section className="w-full grid grid-cols-4 grid-rows-2 p-6 gap-6">
      <div
        className={`rounded col-start-1 w-full h-full border ${
          colorMode === "light"
            ? "text-black bg-white"
            : "bg-gray-800 text-white"
        }`}
      ></div>
      <div
        className={`rounded col-start-2 col-span-2 w-full h-full border ${
          colorMode === "light"
            ? "text-black bg-white"
            : "bg-gray-800 text-white"
        }`}
      ></div>
      <div
        className={`${
          colorMode === "light"
            ? "text-black bg-white"
            : "bg-gray-800 text-white"
        }
      p-4 rounded col-start-4 row-span-2 border`}
      ></div>
      <div
        className={`rounded col-start-1 col-span-3 w-full h-full border ${
          colorMode === "light"
            ? "text-black bg-white"
            : "bg-gray-800 text-white"
        }`}
      >
      </div>
    </section>
  );
};

export default Loading;
