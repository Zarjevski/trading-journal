import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";
import Rule from "./Rule";

const data = [
  { id: 1, rule: "wait for breakout and confirmation" },
  { id: 2, rule: "wait for breakout and confirmation" },
  { id: 3, rule: "wait for breakout and confirmation" },
];

const RulesList = () => {
  const { colorMode } = useColorMode();
  return (
    <div
      className={`${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }
      p-4 rounded col-start-4 row-span-2 border`}
    >
      <header className="w-full flex justify-between border-b p-2">
        <h1 className="font-bold">My Rules</h1>
        <button
          className={`flex items-center capitalize px-4 rounded ${
            colorMode === "light" ? "hover:bg-gray-200" : "hover:bg-gray-700"
          }`}
        >
          <IoAdd className="mr-1" />
          new
        </button>
      </header>
      <ul className="w-full h-auto bg-gray-850 text-sm p-2">
        {data.map((rule, index)=> {
          return (
            <Rule key={rule.id}
            id={rule.id} title={rule.rule} number={index}/>
          )
        })}
      </ul>
    </div>
  );
};

export default RulesList;
