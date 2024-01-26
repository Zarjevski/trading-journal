import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

interface DropdownProps {
  colorMode: string;
  list: string[];
  title: string
}

const Dropdown: React.FC<DropdownProps> = ({ colorMode, list, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("none");
  return (
    <div className={`h-14 m-4 flex flex-col justify-center  w-full ${isOpen ? "relative" : ""}`}>
      <h1 className="py-2 font-bold capitalize">{title}</h1>
      <div
        className={`h-auto w-full border font-medium ${
          colorMode == "light" ? "bg-white" : "bg-gray-800"
        }`}
      >
        <div className={`h-10 flex justify-between ${isOpen ? "border-b" : ""}`}>
          <div className="p-2 flex items-center ">{value}</div>
          <div
            className={`flex items-center justify-center p-2 cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </div>
        </div>
        {isOpen ? (
          <ul className="w-full select-none max-h-32 overflow-y-scroll">
            {list.map((item, index) => {
              if (value === item) {
                return null;
              } else {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setValue(item);
                      setIsOpen(!isOpen);
                    }}
                    className={`${
                      colorMode === "light"
                        ? "hover:bg-gray-200"
                        : "hover:bg-gray-700"
                    } cursor-pointer p-2`}
                  >
                    {item}
                  </li>
                );
              }
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
