import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { motion as m } from "framer-motion";

interface ButtonProps {
  width?: string;
  text: string;
  type?: string
  onClick?: any
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, width, onClick, type, disabled }) => {
  const { colorMode } = useColorMode();
  return (
    <m.button
      whileTap={{scale: 0.8}}
      className={`${
        colorMode === "light" ? "bg-gray-950 text-white hover:bg-gray-700" : "bg-white text-black hover:bg-gray-100"
      } ${width} rounded px-2 py-1 capitalize font-bold `}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </m.button>
  );
};

export default Button;
