import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2, 3, 2, 5, 6, 3],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const AccountGrow = ({ colorMode }: { colorMode: string }) => {
  return (
    <div
      className={`${
        colorMode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      } rounded shadow border w-fit h-full`}
    >
      <header className="p-4 border-b">
        <h2 className="font-bold text-xl">Account Growth</h2>
      </header>
      <div className="p-8 h-full w-full  ">
        <Line options={options} data={data} className="w-full h-[80%]" />
      </div>
    </div>
  );
};

export default AccountGrow;
