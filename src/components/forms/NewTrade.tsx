import React, { useState } from "react";
import ChooseExchange from "../trades/ChooseExchange";
import { useColorMode } from "@chakra-ui/react";
import useResetModal from "@/hooks/useResetModal";
import { MdClose } from "react-icons/md";

// exchange, date, symbol, type, margin/contracts, status, size, reason

const NewTrade = () => {
  const [exchange, setExchange] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { colorMode } = useColorMode();
  const reset = useResetModal();
  const onSubmit = async(e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      
    } catch (error) {
      
    }
  };
  if (!exchange) {
    return <ChooseExchange colorMode={colorMode} setExchange={setExchange} />;
  } else if (isLoading) {
    <div>...loading</div>;
  } else {
    return (
      <form className={`${colorMode === "light" ? "bg-white" : "bg-gray-800"} w-2/6 p-4`}>
        <header className="flex justify-between">
          <span></span>
          <h1 className="font-bold capitalize">add new trade</h1>
          <button onClick={()=> reset()}><MdClose /></button>
        </header>
      </form>
    );
  }
};

export default NewTrade;
