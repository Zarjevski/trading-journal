import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import Button from "../common/Button";
import Input from "../common/Input";
import axios from "axios";
import FormHeader from "./FormHeader";

const NewRule = () => {
  const { colorMode } = useColorMode();
  const [value, setValue] = useState("");
  return (
    <form
      className={`border shadow rounded h-48 w-1/4  ${
        colorMode === "light" ? "bg-white" : "bg-gray-800"
      }`}
      onSubmit={async (e: React.SyntheticEvent) => {
        const create = await axios.post("/api/rules/new", { text: value });
      }}
    >
      <FormHeader title="Add rule"/>
      <div className="flex items-center justify-center h-12 py-10 px-6">
        <Input
          type={"text"}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="h-12 flex items-center justify-center p-4 ">
        <Button text={"submit"} type={"submit"} />
      </div>
    </form>
  );
};

export default NewRule;
