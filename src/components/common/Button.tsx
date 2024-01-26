import React from "react";
import { useColorMode } from "@chakra-ui/react";

interface ButtonProps {
  width?: string;
  text: string;
  type?: string
  onClick?: any
}

const Button: React.FC<ButtonProps> = ({ text, width, onClick, type }) => {
  const { colorMode } = useColorMode();
  return (
    <button
      className={`${
        colorMode === "light" ? "bg-gray-950 text-white" : "bg-white text-black"
      } ${width} rounded px-2 py-1 capitalize font-bold`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
