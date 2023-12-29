import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August","September"],
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [0, 100, 340, 100, 50, 140, 50,60,50,25],
      borderColor: "rgb(94, 110, 191)",
      backgroundColor: "rgba(94, 110, 191, 0.5)",
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const RoadTM = ({ colorMode }: { colorMode: string }) => {
  return (
    <div
      className={`rounded col-start-2 col-span-2 w-full h-full border p-4 ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <header className="border-b p-2">
        <h1 className="font-bold">Road To Million</h1>
      </header>
      <div className="h-[90%] flex items-center ">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default RoadTM;
