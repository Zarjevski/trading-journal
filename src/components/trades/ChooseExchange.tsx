import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import BinanceLogo from "@/assets/binance-logo.png";
import NinjaTraderLogo from "@/assets/ninjatrader-logo.jpg";
import useResetModal from "@/hooks/useResetModal";
import { MdClose } from "react-icons/md";

const exchanges = [
  {
    title: "binance",
    image: BinanceLogo,
  },
  {
    title: "ninjaTrader",
    image: NinjaTraderLogo,
  },
];

const ChooseExchange = ({
  colorMode,
  setExchange,
}: {
  colorMode: string;
  setExchange: Dispatch<SetStateAction<string>>;
}) => {
  const [active, setActive] = React.useState("");
  const reset = useResetModal();
  return (
    <div
      className={`w-2/6 px-6 rounded border transition-all duration-600 ease-in delay-150 ${
        colorMode === "light" ? "bg-white" : "bg-gray-800"
      }`}
    >
      <header className="h-12 flex justify-between items-center">
        <span></span>
        <h1 className="font-bold text-lg">choose exchange</h1>
        <button onClick={() => reset()}>
          <MdClose className={"h-5 w-5"} />
        </button>
      </header>
      <div
        className={`h-44 w-full gap-4 flex justify-evenly my-4 font-medium capitalize`}
      >
        {exchanges.map((exchange, index) => {
          return (
            <div
              className={`rounded border ${
                active === exchange.title ? "border-2 border-blue-500" : null
              } w-2/4 flex flex-col justify-center items-center cursor-pointer`}
              key={index}
              onClick={() => setActive(exchange.title)}
            >
              <Image
                height={50}
                width={50}
                src={exchange.image}
                alt={exchange.title}
              />
              <h2 className="mt-1">{exchange.title}</h2>
            </div>
          );
        })}
      </div>
      <div className="h-12 flex justify-center items-center my-4">
        <button
          className={` border rounded p-2 font-bold ${
            colorMode === "light"
              ? "bg-black text-white"
              : "bg-white text-gray-950"
          }`}
          onClick={()=> setExchange(active)}
        >
          continue
        </button>
      </div>
    </div>
  );
};

export default ChooseExchange;
