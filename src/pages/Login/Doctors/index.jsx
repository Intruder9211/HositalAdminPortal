import React from "react";
import { Helmet } from "react-helmet-async";
import DataTable from "../../../components/DataTable.jsx";
import { createColumnHelper } from "@tanstack/react-table";
import { doctors } from "../../../data/doctors.js";

const c = createColumnHelper();
const columns = [
  c.accessor("name", { header: "Doctor" }),
  c.accessor("specialization", { header: "Specialization" }),
  c.accessor("experience", { header: "Experience (yrs)" }),
  c.accessor("rating", { header: "Rating" }),
];

export default function Doctors() {
  const [q, setQ] = React.useState("");
  return (
    <div className="space-y-4">
      <Helmet><title>Doctors — Amrutam Admin</title></Helmet>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-2xl font-bold">Doctors</h1>
        <input className="border rounded-xl px-3 py-2 w-full md:w-80" placeholder="Search doctors…" value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <DataTable columns={columns} data={doctors} globalFilter={q} onGlobalFilterChange={setQ} />
    </div>
  );
}
