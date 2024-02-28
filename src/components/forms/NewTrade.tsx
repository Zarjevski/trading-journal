import React, { useState } from "react";
import ChooseExchange from "../trades/ChooseExchange";
import FormHeader from "./FormHeader";
import Dropdown from "../common/Dropdown";
import Input from "../common/Input";
import Button from "../common/Button";
import TextArea from "../common/TextArea";
import { useColorMode } from "@chakra-ui/react";
import { MdAddAPhoto } from "react-icons/md";
import axios from "axios";

const NewTrade = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [exchange, setExchange] = useState({ id: "", title: "" });
  const [formData, setFormData] = useState({ size: "", margin: "", date: "", reason: "" });
  const { colorMode } = useColorMode();
  if (!exchange.id) {
    return <ChooseExchange colorMode={colorMode} setExchange={setExchange} />;
  } else {
    return (
      <form
        className={`${
          colorMode === "light" ? "bg-white" : "bg-gray-800"
        } w-2/6  shadow rounded`}
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
        <FormHeader title={"add new trade"} />
        <section>
          <div className="flex mt-8">
            <Dropdown
              title={"symbol"}
              list={["bitcoin", "matic", "link", "arp"]}
              setState={setFormData}
              state={formData}
            />
            <Dropdown
              title={"position"}
              list={["long", "short"]}
              setState={setFormData}
              state={formData}
            />
          </div>
          <div className="flex p-4 gap-8 justify-center items-center">
            <Input
              label={"size"}
              name={"size"}
              type={"number"}
              placeholder={"amount in dollars"}
              onChange={(e) =>
                setFormData({ ...formData, size: e.target.value })
              }
            />
            <Input
              label={"contract/margin"}
              name={"margin"}
              type={"number"}
              placeholder={"example 20x"}
              onChange={(e) =>
                setFormData({ ...formData, margin: e.target.value })
              }
            />
          </div>
          <div className="flex">
            <Dropdown
              title={"status"}
              list={["win", "loss", "pending"]}
              setState={setFormData}
              state={formData}
            />
            <Input
              type={"date"}
              name={"date"}
              label={"entry"}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </div>
          <div className="flex p-4 gap-8">
            <TextArea placeholder="Trade Summary" cols={30} rows={10} onChange={(e)=> setFormData({...formData, reason: e.target.value})} />
            <div className="flex flex-col items-center justify-center border w-full cursor-pointer">
              <MdAddAPhoto className={`h-12 w-12`} />
              <h2 className="select-none capitalize">add picture</h2>
            </div>
          </div>
          <footer className="w-full flex justify-center items-center p-4">
            <Button text={"submit"} />
          </footer>
        </section>
      </form>
    );
  }
};

export default NewTrade;
