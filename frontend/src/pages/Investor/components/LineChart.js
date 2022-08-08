import {
  Chart as ChartJS,
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,

  Tooltip
);

const LineChart = () => {
  //const labels = Utils.months({ count: 7 });
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Spet",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Hello",
        data: [
          65000, 59000, 80000, 810000, 56000, 55000, 40000, 60000, 75000, 60000,
          67000, 35000,
        ],
        fill: "white",
        borderColor: "#9281FF",
        tension: 0.1,
      },
    ],
  };
  return (
    <div>
      <Line
        style={{ height: 278, width: "100%" }}
        data={data}
        options={{
          elements: { point: { borderWidth: 0 } },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                color: "#343841",
                borderDash: [2],
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
