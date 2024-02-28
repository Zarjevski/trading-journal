import axios from "axios";
import React from "react";
import Image from "next/image";

const FearAndGreed = ({ colorMode }: { colorMode: string }) => {
  const [data, setData] = React.useState({
    value_classification: "",
    value: "",
  });
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.alternative.me/fng/");
      setData(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      className={`rounded col-start-1 w-full h-full border p-4 flex flex-col justify-between ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <h1 className="text-center font-bold">Fear & Greed index</h1>
      <div className="" id="fear-and-greed"></div>
      <div className="w-full flex flex-col items-center justify-center">
        <h2>{data.value}</h2>
        <h1>{data.value_classification}</h1>
      </div>
    </div>
  );
};

export default FearAndGreed;
