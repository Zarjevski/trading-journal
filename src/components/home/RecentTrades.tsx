import React from "react";
import { IoAdd } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import Trade from "@/components/common/Trade";

const trades = [
  {
    symbol: "BTC",
    status: "Win",
    size: "100$",
    margin: "20x",
    position: "short",
    date: "20/12/2022",
  },
  {
    symbol: "BTC",
    status: "loss",
    size: "100$",
    margin: "20x",
    position: "long",
    date: "20/12/2022",
  },
  {
    symbol: "BTC",
    status: "Win",
    size: "100$",
    margin: "20x",
    position: "long",
    date: "20/12/2022",
  },
  {
    symbol: "BTC",
    status: "Win",
    size: "100$",
    margin: "20x",
    position: "long",
    date: "20/12/2022",
  },
];

const RecentTrades = ({ colorMode }: { colorMode: string }) => {
  return (
    <div
      className={`rounded col-start-1 col-span-3 w-full h-full border p-4 ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <header className="p-3 capitalize border-b flex justify-between">
        <h1 className="font-bold flex items-center">
          <GoHistory className="w-4 h-4 mr-2" />
          recent trades
        </h1>
        <button
          className={`flex items-center capitalize px-1 rounded ${
            colorMode === "light" ? "hover:bg-gray-200" : "hover:bg-gray-700"
          }`}
        >
          <IoAdd className="mr-1" />
          new
        </button>
      </header>
      <table className="table-auto w-full">
        <thead className="h-10">
          <tr className="font-normal border-b capitalize">
            <th>symbol</th>
            <th>size</th>
            <th>position</th>
            <th>margin</th>
            <th>status</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => {
            return (
              <Trade
                id={index}
                key={index}
                symbol={trade.symbol}
                size={trade.size}
                position={trade.position}
                margin={trade.margin}
                status={trade.status}
                date={trade.date}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTrades;
