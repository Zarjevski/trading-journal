import React from "react";
import { useColorMode } from "@chakra-ui/react";

interface TextAreaProps {
  placeholder?: string;
  name?: string;
  id?: string;
  cols: number;
  rows: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  name,
  id,
  cols,
  rows,
}) => {
  const { colorMode } = useColorMode();
  return (
    <textarea
      className={`w-full border p-2 ${
        colorMode === "light" ? "bg-white" : "bg-black"
      }`}
      placeholder={placeholder}
      name=""
      id=""
      cols={cols}
      rows={rows}
    ></textarea>
  );
};

export default TextArea;
