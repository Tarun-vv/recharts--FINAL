import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: 2019, subs: 1500, views: 20000 },
  { name: 2020, subs: 1800, views: 25000 },
  { name: 2021, subs: 2200, views: 30000 },
  { name: 2022, subs: 2800, views: 40000 },
  { name: 2023, subs: 3500, views: 50000 },
  { name: 2024, subs: 4200, views: 60000 },
];

function BarGraph() {
  return (
    <div>
      <ResponsiveContainer width={600} height={300}>
        <BarChart width={600} height={300} data={data}>
          <Bar dataKey="subs" fill="blue" />
          <Bar dataKey="views" fill="red" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend cursor={{ fill: "transparent" }} />
          <CartesianGrid strokeDasharray="3 3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarGraph;
