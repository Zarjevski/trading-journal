import React, { useState } from "react";
import ChooseExchange from "../trades/ChooseExchange";
import useResetModal from "@/hooks/useResetModal";
import Dropdown from "../common/Dropdown";
import Input from "../common/Input";
import Button from "../common/Button";
import TextArea from "../common/TextArea";
import { useColorMode } from "@chakra-ui/react";
import { MdClose, MdAddAPhoto } from "react-icons/md";

const NewTrade = () => {
  const [exchange, setExchange] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ exchange, size: "", margin: "" });
  const { colorMode } = useColorMode();
  const reset = useResetModal();
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };
  if (!exchange) {
    return <ChooseExchange colorMode={colorMode} setExchange={setExchange} />;
  } else if (isLoading) {
    <div>...loading</div>;
  } else {
    return (
      <form
        className={`${
          colorMode === "light" ? "bg-white" : "bg-gray-800"
        } w-2/6 p-4 shadow rounded`}
      >
        <header className="flex justify-between">
          <span></span>
          <h1 className="font-bold capitalize">add new trade</h1>
          <button onClick={() => reset()}>
            <MdClose />
          </button>
        </header>
        <section>
          <div className="flex mt-8">
            <Dropdown
              colorMode={colorMode}
              title={"symbol"}
              list={["bitcoin", "matic", "link", "arp"]}
            />
            <Dropdown
              colorMode={colorMode}
              title={"position"}
              list={["long", "short"]}
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
              colorMode={colorMode}
              title={"status"}
              list={["win", "loss", "pending"]}
            />
            <Input type={"date"} name={"date"} label={"entry"} />
          </div>
          <div className="flex p-4 gap-8">
            <TextArea placeholder="Trade Summary" cols={30} rows={10} />
            <div className="flex flex-col items-center justify-center border w-full cursor-pointer">
              <MdAddAPhoto className={`h-12 w-12`}/>
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
