import React from "react";
import { useColorMode } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";

const TopCoins = () => {
  const [coins, setCoins] = React.useState([]);
  const { colorMode } = useColorMode();
  const fetchCoins = async () => {
    const data: any = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    setCoins(await data.data.coins);
  };
  React.useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <div
      className={`rounded overflow-y-scroll col-start-2 col-span-2 w-full h-full border p-2 ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <header className="border-b p-1">
        <h1 className="font-bold text-lg">Trending &#x1f525;</h1>
      </header>
      <div className="flex w-full h-full flex-wrap">
        {coins.map((coin: any, index) => {
          return (
            <div
              className="w-1/2 p-1 h-14 flex items-center justify-between gap-2 font-medium"
              key={index}
            >
              <div className="flex px-1 gap-4">
                <Image src={coin.item.thumb} alt="" width={20} height={20} />
                <h4>{coin.item.name}</h4>
              </div>
              <div className="flex pr-5 ">
                <h4>{coin.item.data.price}</h4>
                <h4></h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCoins;
