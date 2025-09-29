import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import style from './chart.module.css'

// On enregistre les composants nécessaires
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const chartData = {
    labels: ["Cases", "Recovered", "Deaths"],
    datasets: [
      {
        label: "COVID-19 Data",
        data: [data.cases, data.recovered, data.deaths],
        backgroundColor: ["#007bff", "#27ae60", "#c0392b"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "COVID-19 Overview" },
    },
  };

  return (
    <div className={style.container}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
