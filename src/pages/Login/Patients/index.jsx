import React from "react";
import { Helmet } from "react-helmet-async";
import DataTable from "../../../components/DataTable.jsx";
import { createColumnHelper } from "@tanstack/react-table";
import { patients } from "../../../data/patients.js";
import { formatDate } from "../../../utils/formatDate.js";

const c = createColumnHelper();
const columns = [
  c.accessor("name", { header: "Patient" }),
  c.accessor("gender", { header: "Gender" }),
  c.accessor("age", { header: "Age" }),
  c.accessor("condition", { header: "Condition" }),
  c.accessor("lastVisit", { header: "Last Visit", cell: v => formatDate(v.getValue()) }),
];

export default function Patients() {
  const [q, setQ] = React.useState("");
  return (
    <div className="space-y-4">
      <Helmet><title>Patients — Amrutam Admin</title></Helmet>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-2xl font-bold">Patients</h1>
        <input className="border rounded-xl px-3 py-2 w-full md:w-80" placeholder="Search patients…" value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <DataTable columns={columns} data={patients} globalFilter={q} onGlobalFilterChange={setQ} />
    </div>
  );
}
