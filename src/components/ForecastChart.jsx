import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Apr", value: 300 },
  { month: "May", value: 500 },
  { month: "Jun", value: 200 },
];

const ForecastChart = () => {
  return (
    <BarChart width={300} height={200} data={data}>
      <XAxis dataKey="month" stroke="#fff" />
      <YAxis stroke="#fff" />
      <Tooltip />
      <Bar dataKey="value" fill="#ffc107" />
    </BarChart>
  );
};

export default ForecastChart;
