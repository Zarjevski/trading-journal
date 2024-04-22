import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import Button from "../common/Button";
import Input from "../common/Input";
import axios from "axios";
import FormHeader from "./FormHeader";
import { motion } from "framer-motion";
import { spring } from "@/utils/framerEffects";

const NewRule = () => {
  const { colorMode } = useColorMode();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  return (
    <motion.form
      className={`border shadow rounded h-48 w-1/4  ${
        colorMode === "light" ? "bg-white" : "bg-gray-800"
      }`}
      onSubmit={async (e: React.SyntheticEvent) => {
        if (value) {
          const create = await axios.post("/api/rules/new", { text: value });
        } else {
          e.preventDefault()
          setError("you cant send empty request!");
        }
      }}
      initial={spring.initial}
      animate={spring.animate}
      transition={spring.transition}
    >
      <FormHeader title="Add rule" />
      <div className="flex flex-col items-center justify-center h-12 py-10 px-6 transition-all">
        <Input type={"text"} onChange={(e) => setValue(e.target.value)} />
        {error ? <div className="text-red-400">{error}</div> : null}
      </div>
      <div className="h-12 flex items-center justify-center p-4 ">
        <Button text={"submit"} type={"submit"} />
      </div>
    </motion.form>
  );
};

export default NewRule;
