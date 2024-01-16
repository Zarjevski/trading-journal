import React from "react";
import { IoAdd } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import Trade from "@/components/common/Trade";
import TableHeader from "./TableHeader";
import useNewTradeForm from "@/hooks/useNewTradeForm";
import {trades} from './dummyTrades'


interface TradesTableProps {
  colorMode: string;
  data?: [{}];
  title: string;
}

const TradesTable: React.FC<TradesTableProps> = ({ colorMode, title }) => {
  const newTrade = useNewTradeForm()
  return (
    <div
      className={`rounded col-start-1 col-span-3 w-full h-full border p-4 shadow ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <header className="p-3 capitalize border-b flex justify-between">
        <h1 className="font-bold flex items-center text-xl">
          <GoHistory className="w-4 h-4 mr-2" />
          {title}
        </h1>
        <button
          className={`flex items-center capitalize px-2 rounded ${
            colorMode === "light" ? "bg-gray-900 hover:bg-gray-700 text-white" : "hover:bg-gray-700"
          }`}
          onClick={()=> newTrade()}
        >
          <IoAdd  />
          new
        </button>
      </header>
      {trades.length > 1 ? (
        <table className="table-auto w-full overflow-scroll">
          <TableHeader />
          <tbody>
            {trades.map((trade, index)=> {
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
                      colorMode={colorMode}
                    />
                  )})}
          </tbody>
        </table>
      ) : (
        <div className="w-full h-full min-h-[10vh] flex justify-center items-center text-center">
          <h1 className="text-lg capitalize">no trades available</h1>
        </div>
      )}
    </div>
  );
};

export default TradesTable;
