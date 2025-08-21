import { Helmet } from "react-helmet-async";
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";

const area = [
  { day: "Mon", appt: 64 }, { day: "Tue", appt: 88 }, { day: "Wed", appt: 72 },
  { day: "Thu", appt: 96 }, { day: "Fri", appt: 124 }, { day: "Sat", appt: 140 }, { day: "Sun", appt: 58 },
];
const pie = [{ name: "Completed", value: 62 }, { name: "Scheduled", value: 28 }, { name: "Cancelled", value: 10 }];

export default function Reports() {
  return (
    <div className="space-y-6">
      <Helmet><title>Reports — Amrutam Admin</title></Helmet>
      <h1 className="text-2xl font-bold">Reports</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl shadow-sm p-4">
          <div className="font-semibold mb-2">Weekly Appointments</div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={area}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" /><YAxis /><Tooltip />
              <Area dataKey="appt" type="monotone" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white border rounded-2xl shadow-sm p-4">
          <div className="font-semibold mb-2">Status Breakdown</div>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={pie} dataKey="value" nameKey="name" outerRadius={100} label />
              {pie.map((_, i) => <Cell key={i} />)}
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
