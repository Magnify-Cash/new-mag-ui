import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "00:00", value: 400 },
  { name: "04:00", value: 300 },
  { name: "08:00", value: 600 },
  { name: "12:00", value: 800 },
  { name: "16:00", value: 500 },
  { name: "20:00", value: 450 },
];

const defaultAxisProps = {
  tick: { fill: "#666666" },
  tickLine: { stroke: "#666666" },
  axisLine: { stroke: "#666666" },
};

export function VolumeChart() {
  return (
    <Card className="dashboard-card mt-4 p-6">
      <h2 className="text-xl font-bold mb-4 text-foreground">
        Transaction Volume (24h)
      </h2>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
            <XAxis
              dataKey="name"
              scale="band"
              padding={{ left: 10, right: 10 }}
              {...defaultAxisProps}
            />
            <YAxis width={80} {...defaultAxisProps} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "4px",
              }}
            />
            <Bar
              dataKey="value"
              fill="#000000"
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
