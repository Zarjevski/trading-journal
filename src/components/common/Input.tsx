import React from "react";
import { useColorMode } from "@chakra-ui/react";

interface InputProps {
  label?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  name,
  onChange,
  placeholder,
}) => {
  const { colorMode } = useColorMode();
  return (
    <div className="w-full  ">
      <label htmlFor={name} className="my-2 font-bold capitalize">
        {label}
      </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className={`w-full my-2 p-2 h-10 border ${
          colorMode === "light" ? "bg-white" : "bg-gray-800"
        }`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
