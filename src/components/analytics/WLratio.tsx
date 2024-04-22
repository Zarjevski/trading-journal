import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const WLratio = ({ colorMode }: { colorMode: string }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const lossColor =
    colorMode === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0,0,0,0.7)";
  const winColor =
    colorMode === "dark" ? "rgba(94, 110, 191, 0.7)" : "rgba(3, 138, 255, 0.7)";
  return (
    <div
      className={`w-1/4 h-full border shadow  ${
        colorMode === "light" ? "text-black bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <header className="p-4 border-b">
        <h2 className="font-bold text-xl">W/L Ratio</h2>
      </header>
      <div className="w-full h-5/6 flex items-center justify-center p-8">
        <Doughnut
          className="h-12 w-12"
          data={{
            labels: ["Wins", "Losses"],
            datasets: [
              {
                label: "total",
                data: [32, 14],
                backgroundColor: [winColor, lossColor],
                borderColor: [
                  "rgba(94, 110, 191, 1)",
                  "rgba(255, 255, 255, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default WLratio;
