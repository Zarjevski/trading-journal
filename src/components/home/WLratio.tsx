import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const WLratio = ({ colorMode }: { colorMode: string }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div
      className={`rounded col-start-1 w-full h-full border p-4 ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <header className="p-2 mb-4 border-b">
        <h1 className="font-bold">W/L Ratio</h1>
      </header>
      <div className="w-full h-5/6 flex items-center justify-center">
      <Doughnut
      className="h-12 w-12"
        data={{
          labels: ["Wins", "Losses"],
          datasets: [
            {
              label: "total",
              data: [32, 14],
              backgroundColor: [
                "rgba(94, 110, 191, 0.7)",
                "rgba(255, 255, 255, 0.7)",
              ],
              borderColor: ["rgba(94, 110, 191, 1)", "rgba(255, 255, 255, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        options={{plugins: {
          legend: {
            display: true, position: 'bottom'
          },
          title: {
            display: false,
          },
        },}}
        
      />
      </div>
    </div>
  );
};

export default WLratio;
