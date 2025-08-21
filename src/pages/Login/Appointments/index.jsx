import React from "react";
import { Helmet } from "react-helmet-async";
import DataTable from "../../../components/DataTable.jsx";
import { createColumnHelper } from "@tanstack/react-table";
import { appointments } from "../../../data/appointments.js";
import { patients } from "../../../data/patients.js";
import { doctors } from "../../../data/doctors.js";
import { formatDate } from "../../../utils/formatDate.js";

const pById = Object.fromEntries(patients.map(p => [p.id, p.name]));
const dById = Object.fromEntries(doctors.map(d => [d.id, d.name]));

const c = createColumnHelper();
const columns = [
  c.accessor("id", { header: "ID" }),
  c.accessor("patientId", { header: "Patient", cell: v => pById[v.getValue()] || "-" }),
  c.accessor("doctorId", { header: "Doctor", cell: v => dById[v.getValue()] || "-" }),
  c.accessor("date", { header: "Date", cell: v => formatDate(v.getValue()) }),
  c.accessor("status", { header: "Status" }),
];

export default function Appointments() {
  const [q, setQ] = React.useState("");
  const [status, setStatus] = React.useState("All");

  const filtered = React.useMemo(() => {
    return appointments.filter(a => (status === "All" || a.status === status));
  }, [status]);

  return (
    <div className="space-y-4">
      <Helmet><title>Appointments — Amrutam Admin</title></Helmet>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <div className="flex gap-2">
          <input className="border rounded-xl px-3 py-2 w-56" placeholder="Search…" value={q} onChange={e=>setQ(e.target.value)} />
          <select className="border rounded-xl px-3 py-2" value={status} onChange={e=>setStatus(e.target.value)}>
            <option>All</option><option>Scheduled</option><option>Completed</option><option>Cancelled</option>
          </select>
        </div>
      </div>
      <DataTable columns={columns} data={filtered} globalFilter={q} onGlobalFilterChange={setQ} />
    </div>
  );
}
