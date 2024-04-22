import axios from "axios";
import React from "react";

const FearAndGreed = ({ colorMode }: { colorMode: string }) => {
  const [data, setData] = React.useState({
    value_classification: "",
    value: 0,
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
      className={`rounded col-start-1 w-full h-full border p-8 flex flex-col justify-between ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <h1 className="text-center font-bold text-xl">Fear & Greed index</h1>
      <div className="w-full h-0 relative pb-[50%] bg-gray-300 rounded-t-full overflow-hidden">
        <div
          className={`left-0 top-full w-full h-full bg-green-400 absolute origin-top rotate-[0.${
            data.value / 2
          }turn]`}
        >
          {/* fill */}
        </div>
        <div className={`rounded-full w-3/4 h-[150%] absolute top-1/4 left-1/2 -translate-x-2/4 ${colorMode === "light" ? " bg-white" : "bg-gray-800"}`}>
          {/* cover */}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h2>{data.value}</h2>
        <h1>{data.value_classification}</h1>
      </div>
    </div>
  );
};

export default FearAndGreed;
