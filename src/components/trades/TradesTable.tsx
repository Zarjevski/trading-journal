import React from "react";
import Button from "../common/Button";
import Trade from "@/components/common/Trade";
import TableHeader from "./TableHeader";
import useNewTradeForm from "@/hooks/useNewTradeForm";
import { trades } from "./dummyTrades";
import { motion } from "framer-motion";

interface TradesTableProps {
  colorMode: string;
  data?: [{}];
  title: string;
  icon?: any;
}

const TradesTable: React.FC<TradesTableProps> = ({ colorMode, title, icon: Icon }) => {
  const newTrade = useNewTradeForm();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
      className={`rounded overflow-y-scroll col-start-1 col-span-3 w-full h-full border p-4 shadow ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <header className="p-1 capitalize border-b flex justify-between">
        <h1 className="font-bold flex items-center text-lg">
          {Icon ? <Icon className="w-4 h-4 mr-2" /> : null}
          {title}
        </h1>
        <Button text="new" onClick={()=> newTrade()}/>
      </header>
      {trades.length > 1 ? (
        <table className="table-auto w-full">
          <TableHeader />
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
                  colorMode={colorMode}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="w-full h-full min-h-[10vh] flex justify-center items-center text-center">
          <h1 className="text-lg capitalize">no trades available</h1>
        </div>
      )}
    </motion.div>
  );
};

export default TradesTable;
