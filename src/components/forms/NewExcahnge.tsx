import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Button from "../common/Button";
import FormHeader from "./FormHeader";
import { useColorMode } from "@chakra-ui/react";

const NewExcahnge = () => {
  const [active, setActive] = useState<any>({});
  const [exchanges, setExchanges] = useState([]);
  const { colorMode } = useColorMode();
  const getData = async () => {
    setExchanges(
      (await axios.get("https://api.coingecko.com/api/v3/exchanges")).data
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <form
      className={`w-1/2 h-[70vh] rounded overflow-y-scroll ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
      onSubmit={async () => {
        if (active) {
          const response = axios.post("/api/exchanges/new", {
            exchange: active.name,
            image: active.image,
          });
        }
      }}
    >
      <FormHeader title="add new exchange" />
      <div className="flex flex-wrap ">
        {exchanges.map((exchange, index) => {
          const { image, name }: { image: string; name: string } = exchange;
          return (
            <div
              className={`h-12 select-none w-1/3 py-2 px-4 flex border justify-between items-center cursor-pointer ${
                active?.name === name ? " border-violet-500" : ""
              }`}
              onClick={() => setActive(exchange)}
              key={index}
            >
              <Image width={30} height={30} src={image} alt={name} />
              <h1>{name}</h1>
            </div>
          );
        })}
      </div>
      <div className="w-full h-24 flex justify-center items-center">
        <Button text="Submit" type="submit" />
      </div>
    </form>
  );
};

export default NewExcahnge;
