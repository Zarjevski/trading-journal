import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

const RulesList = () => {
  const { colorMode } = useColorMode();
  return (
    <div
      className={`${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }
      p-6 rounded`}
    >
      <header className="w-full flex justify-between">
        <h1>My Rules</h1>
        <button className="flex items-center capitalize">
          <IoAdd className="mx-1" />
          new
        </button>
      </header>
    </div>
  );
};

export default RulesList;
