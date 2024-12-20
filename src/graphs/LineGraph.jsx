import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const popularityData = [
  { name: 2019, react: 60, angular: 65, vue: 70 },
  { name: 2020, react: 32, angular: 23, vue: 64 },
  { name: 2021, react: 70, angular: 55, vue: 60 },
  { name: 2022, react: 75, angular: 65, vue: 56 },
  { name: 2023, react: 34, angular: 45, vue: 80 },
  { name: 2024, react: 76, angular: 67, vue: 75 },
];

function LineGraph() {
  return (
    <div>
      <LineChart width={600} height={300} data={popularityData}>
        <Line type="monotone" dataKey="react" stroke="red" />
        <Line type="monotone" dataKey="angular" stroke="blue" />
        <Line type="monotone" dataKey="vue" stroke="green" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Legend />
      </LineChart>
    </div>
  );
}

export default LineGraph;
