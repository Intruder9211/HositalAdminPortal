import React from "react";
import { Helmet } from "react-helmet-async";
import DataTable from "../../../components/DataTable.jsx";
import { createColumnHelper } from "@tanstack/react-table";
import { payments } from "../../../data/payments.js";

const c = createColumnHelper();
const columns = [
  c.accessor("id", { header: "Txn ID" }),
  c.accessor("patient", { header: "Patient" }),
  c.accessor("amount", { header: "Amount (₹)" }),
  c.accessor("method", { header: "Method" }),
  c.accessor("date", { header: "Date" }),
  c.accessor("status", { header: "Status" }),
];

export default function Payments() {
  const [q, setQ] = React.useState("");
  return (
    <div className="space-y-4">
      <Helmet><title>Payments — Amrutam Admin</title></Helmet>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Payments</h1>
        <input className="border rounded-xl px-3 py-2 w-64" placeholder="Search payments…" value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <DataTable columns={columns} data={payments} globalFilter={q} onGlobalFilterChange={setQ} />
    </div>
  );
}
