import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const startDataLight = [
  {
    duration: "1 night",
    value: 7,
    color: "#ef4444",
  },
  {
    duration: "2 nights",
    value: 5,
    color: "#f97316",
  },
  {
    duration: "3 nights",
    value: 3,
    color: "#eab308",
  },
  {
    duration: "4-5 nights",
    value: 4,
    color: "#84cc16",
  },
  {
    duration: "6-7 nights",
    value: 7,
    color: "#22c55e",
  },
  {
    duration: "8-14 nights",
    value: 2,
    color: "#14b8a6",
  },
  {
    duration: "15-21 nights",
    value: 4,
    color: "#3b82f6",
  },
  {
    duration: "21+ nights",
    value: 3,
    color: "#a855f7",
  },
];

function CircularGraph() {
  return (
    <div>
      <ResponsiveContainer height={240} width="100%">
        <PieChart>
          <Pie
            data={startDataLight}
            nameKey="duration"
            dataKey="value"
            innerRadius={85}
            outerRadius={120}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {startDataLight.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CircularGraph;
