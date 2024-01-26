import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import useResetModal from "@/hooks/useResetModal";
import Button from "../common/Button";
import Input from "../common/Input";
import axios from "axios";

const NewRule = () => {
  const { colorMode } = useColorMode();
  const [value, setValue] = useState("");
  const reset = useResetModal();
  return (
    <form
      className={`border shadow rounded h-2/4 w-1/4 p-4 ${
        colorMode === "light" ? "bg-white" : "bg-gray-800"
      }`}
      onSubmit={async (e: React.SyntheticEvent) => {
        const create = await axios.post("/api/rules/new", { text: value });
      }}
    >
      <header className="flex h-12 justify-between items-center mb-2">
        <span></span>
        <h1 className="font-bold capitalize">add Rule</h1>
        <button onClick={() => reset()}>
          <MdClose className="w-5 h-5" />
        </button>
      </header>
      <div className="flex items-center justify-center h-12 my-4">
        <Input
          type={"text"}
          onChange={(e) => setValue(e.target.value)}
          name="rule"
          label="rule"
        />
      </div>
      <div className="h-12 flex items-center justify-center p-4 mt-2">
        <Button text={"submit"} type={"submit"} />
      </div>
    </form>
  );
};

export default NewRule;
