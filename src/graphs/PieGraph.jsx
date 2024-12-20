import { Cell, Pie, PieChart, Tooltip } from "recharts";

const data = [
  {
    name: "food",
    value: 500,
  },
  {
    name: "Flat",
    value: 1000,
  },
  {
    name: "Transportation",
    value: 600,
  },
  {
    name: "Eating Out",
    value: 400,
  },
  {
    name: "Flight",
    value: 300,
  },
];

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF8042"];

const RenderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const Radian = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * Radian);
  const y = cy + radius * Math.sin(-midAngle * Radian);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >{`${(percent * 100).toFixed(0)}%`}</text>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <p>{`$${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

function PieGraph() {
  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={RenderCustomizedLabel}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
  );
}

export default PieGraph;
