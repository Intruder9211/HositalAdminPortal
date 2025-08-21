import { Helmet } from "react-helmet-async";
import StatCard from "../../../components/StatCard.jsx";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";
import { Link } from "react-router-dom";
import react from "react";

const kpis = [
  { title: "Total Patients", value: "1,248", hint: "+3.1% vs last week" },
  { title: "Active Doctors", value: "32", hint: "3 new this month" },
  { title: "Appointments (7d)", value: "486", hint: "No-shows 2.4%" },
  { title: "Revenue (₹)", value: "3,42,900", hint: "+₹22.4k vs prev" },
];

const visits = [
  { day: "Mon", v: 56, r: 21 },
  { day: "Tue", v: 84, r: 28 },
  { day: "Wed", v: 72, r: 25 },
  { day: "Thu", v: 98, r: 34 },
  { day: "Fri", v: 120, r: 42 },
  { day: "Sat", v: 140, r: 46 },
  { day: "Sun", v: 66, r: 18 },
];

const recent = [
  { id: "AP-1201", patient: "Rahul Sharma", doctor: "Dr. Gupta", time: "Today, 11:30", status: "Scheduled" },
  { id: "AP-1200", patient: "Priya Verma", doctor: "Dr. Nair", time: "Today, 10:15", status: "Completed" },
  { id: "AP-1199", patient: "Amit Joshi", doctor: "Dr. Roy", time: "Yesterday, 16:45", status: "Cancelled" },
  { id: "AP-1198", patient: "Sneha Kapoor", doctor: "Dr. Khan", time: "Yesterday, 15:10", status: "Completed" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <Helmet><title>Dashboard — Amrutam Admin</title></Helmet>

      {/* Heading + quick actions */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-500">Overview of appointments, revenue, and activity.</p>
        </div>
        <div className="flex gap-2">
          <Link to="/appointments" className="px-4 py-2 rounded-xl border bg-white hover:bg-gray-50">View Appointments</Link>
          <Link to="/reports" className="px-4 py-2 rounded-xl border bg-black text-white hover:opacity-90">View Reports</Link>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map(k => (
          <StatCard key={k.title} title={k.title} value={k.value} hint={k.hint} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl shadow-sm p-4">
          <div className="font-semibold mb-2">Weekly Visits</div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={visits}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="v" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border rounded-2xl shadow-sm p-4">
          <div className="font-semibold mb-2">Revenue Trend</div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={visits}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="r" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border rounded-2xl shadow-sm p-4 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <div className="font-semibold">Recent Appointments</div>
            <Link to="/appointments" className="text-sm underline">View all</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">ID</th>
                  <th className="text-left py-3 px-4 font-semibold">Patient</th>
                  <th className="text-left py-3 px-4 font-semibold">Doctor</th>
                  <th className="text-left py-3 px-4 font-semibold">Time</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {recent.map(r => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">{r.id}</td>
                    <td className="py-3 px-4">{r.patient}</td>
                    <td className="py-3 px-4">{r.doctor}</td>
                    <td className="py-3 px-4">{r.time}</td>
                    <td className="py-3 px-4">
                      <span className={
                        "px-2 py-1 rounded-lg text-xs " +
                        (r.status === "Completed" ? "bg-green-100 text-green-700" :
                         r.status === "Cancelled" ? "bg-red-100 text-red-700" :
                         "bg-amber-100 text-amber-700")
                      }>
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right column: quick notes / tasks */}
        <div className="bg-white border rounded-2xl shadow-sm p-4 space-y-3">
          <div className="font-semibold">Quick Actions</div>
          <div className="grid gap-2">
            <Link to="/patients" className="border rounded-xl px-3 py-2 hover:bg-gray-50">Add new patient</Link>
            <Link to="/appointments" className="border rounded-xl px-3 py-2 hover:bg-gray-50">Create appointment</Link>
            <Link to="/payments" className="border rounded-xl px-3 py-2 hover:bg-gray-50">Record payment</Link>
          </div>
          <div className="pt-3 border-t">
            <div className="font-semibold mb-2">Today’s Summary</div>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• 7 appointments scheduled</li>
              <li>• 1 cancellation reported</li>
              <li>• ₹12,400 collected</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

