import React from "react";
import { MdClose } from "react-icons/md";
import useResetModal from "@/hooks/useResetModal";
import { useColorMode } from "@chakra-ui/react";

interface FormHeaderProps {
  title: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title }) => {
  const reset = useResetModal();
  const { colorMode } = useColorMode();
  return (
    <header
      className={`flex justify-between items-center border-b py-2 px-4 ${
        colorMode === "light" ? "border-gray-200/[.8]" : "border-gray-700/[.8]"
      }`}
    >
      <span></span>
      <h1 className="font-bold capitalize">{title}</h1>
      <button
        className={`${
          colorMode === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"
        } hover:rounded p-2`}
        type="button"
        title="close form"
        onClick={() => reset()}
      >
        <MdClose />
      </button>
    </header>
  );
};

export default FormHeader;
