import React, { useState } from "react";
import ChooseExchange from "../trades/ChooseExchange";
import FormHeader from "./FormHeader";
import TradeDetails from "../trades/TradeDetails";
import axios from "axios";
import { useColorMode } from "@chakra-ui/react";
import { spring } from "@/utils/framerEffects";
import { motion as m } from "framer-motion";

const NewTrade = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [exchange, setExchange] = useState({ id: "", title: "" });
  const [formData, setFormData] = useState({
    size: "",
    margin: "",
    date: "",
    reason: "",
  });
  const { colorMode } = useColorMode();
  return (
    <m.form
      className={`${
        colorMode === "light" ? "bg-white" : "bg-gray-800"
      } w-2/6  shadow rounded`}
      initial={spring.initial}
      animate={spring.animate}
      transition={spring.transition}
      onSubmit={async (e: React.SyntheticEvent) => {
        setIsLoading(true);
        try {
          const response = axios.post("/api/trades/new", {
            exchangeId: exchange.id,
            exchangeName: exchange.title,
            formData,
          });
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }}
    >
      {!exchange.id ? (
        <ChooseExchange colorMode={colorMode} setExchange={setExchange} />
      ) : (
        <>
          <FormHeader title={"add new trade"} />
          <TradeDetails setFormData={setFormData} formData={formData} />
        </>
      )}
    </m.form>
  );
};

export default NewTrade;
