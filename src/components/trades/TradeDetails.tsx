import React from "react";
import Dropdown from "../common/Dropdown";
import Input from "../common/Input";
import Button from "../common/Button";
import { MdAddAPhoto } from "react-icons/md";
import TextArea from "../common/TextArea";

const TradeDetails = ({
  setFormData,
  formData,
}: {
  setFormData: any;
  formData: any;
}) => {
  return (
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
          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
        />
        <Input
          label={"contract/margin"}
          name={"margin"}
          type={"number"}
          placeholder={"example 20x"}
          onChange={(e) => setFormData({ ...formData, margin: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>
      <div className="flex p-4 gap-8">
        <TextArea
          placeholder="Trade Summary"
          cols={30}
          rows={10}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
        />
        <div className="flex flex-col items-center justify-center border w-full cursor-pointer">
          <MdAddAPhoto className={`h-12 w-12`} />
          <h2 className="select-none capitalize">add picture</h2>
        </div>
      </div>
      <footer className="w-full flex justify-center items-center p-4">
        <Button text={"submit"} />
      </footer>
    </section>
  );
};

export default TradeDetails;
