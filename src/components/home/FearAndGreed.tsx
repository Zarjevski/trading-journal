import axios from "axios";
import React from "react";
import Image from "next/image";
import Dog from "@/assets/dog.png";
import Krabs from "@/assets/krabs.png";
import Peter from "@/assets/peter.png";

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
      className={`rounded col-start-1 w-full h-full border p-4 ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <h1 className="text-center">Fear & Greed index</h1>
      <div className="w-full h-2/3 flex items-center justify-center">
        {data?.value_classification == "Neutral" ? (
          <Image alt="mr white" src={Peter} height={300} width={200} />
        ) : data?.value_classification == "Greed" ? (
          <Image alt="mr krabs" src={Krabs} height={300} width={200} />
        ) : (
          <Image
            alt="courage the cowdaly dog"
            src={Dog}
            height={300}
            width={200}
          />
        )}
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h2>{data.value}</h2>
        <h1>{data.value_classification}</h1>
      </div>
    </div>
  );
};

export default FearAndGreed;
