import React from "react";
import Button from "../common/Button";
import Trade from "@/components/trades/Trade";
import TableHeader from "./TableHeader";
import useNewTradeForm from "@/hooks/useNewTradeForm";
import { motion } from "framer-motion";
import { useUserContext } from "@/context/UserContext";
import Skeleton from "../common/Skeleton";

interface TradesTableProps {
  colorMode: string;
  data?: [{}];
  title: string;
  icon?: any;
}

const TradesTable: React.FC<TradesTableProps> = ({
  colorMode,
  title,
  icon: Icon,
}) => {
  const newTrade = useNewTradeForm();
  const data: any = useUserContext();
  const loading = data.isLoading;
  const trades = data.user.trades;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
      className={`rounded overflow-y-auto col-start-1 col-span-3 w-full h-full border  shadow ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <header className="py-2 px-4 capitalize border-b flex justify-between">
        <h1 className="font-bold flex items-center text-lg">
          {Icon ? <Icon className="w-4 h-4 mr-2" /> : null}
          {title}
        </h1>
        <Button text="new" onClick={() => newTrade()} />
      </header>
      {loading ? (
        [1, 2, 3, 4, 5].map((item, index) => {
          return <Skeleton key={index} width={"w-[90%]"} hieght={"h-12"} />;
        })
      ) : trades.length > 1 ? (
        <table className="table-auto w-full">
          <TableHeader />
          <tbody>
            {trades?.map((trade: any) => {
              const splitDate = trade.date?.split("T");
              return (
                <Trade
                  id={trade.id}
                  key={trade.id}
                  symbol={trade.symbol.toUpperCase()}
                  size={trade.size}
                  position={trade.position}
                  margin={trade.margin}
                  status={trade.status}
                  exchange={trade.exchangeName}
                  date={splitDate[0]}
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
