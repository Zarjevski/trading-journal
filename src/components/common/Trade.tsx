import React from "react";
import Badge from "@/components/common/Badge";
import { useRouter } from "next/navigation";

interface TradeProps {
  id: string | number;
  symbol: string;
  size: string;
  margin: string;
  date: string;
  position: string;
  status: string;
}

const Trade: React.FC<TradeProps> = ({
  id,
  symbol,
  size,
  margin,
  date,
  position,
  status,
}) => {
  const positionColor = position === "long" ? "bg-green-500" : "bg-red-500";
  const statusColor = status === "Win" ? "bg-green-500" : "bg-red-500";
  const router = useRouter();
  return (
    <tr
      className="h-12 text-center hover:bg-gray-700 cursor-pointer"
      onClick={() => router.push(`/trades/${id}`)}
    >
      <td>{symbol}</td>
      <td>{size}</td>
      <td className="flex items-center justify-center capitalize">
        <Badge text={position} color={positionColor} />
      </td>
      <td>{margin}</td>
      <td className="flex items-center p-5 justify-center capitalize">
        <Badge text={status} color={statusColor} />
      </td>
      <td>{date}</td>
    </tr>
  );
};

export default Trade;
