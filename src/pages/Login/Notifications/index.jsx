import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { notifications as initial } from "../../../data/notifications.js";
import { formatDate } from "../../../utils/formatDate.js";

export default function Notifications() {
  const [items, setItems] = useState(initial);
  const toggle = id => setItems(xs => xs.map(n => n.id === id ? { ...n, read: !n.read } : n));

  return (
    <div className="space-y-4">
      <Helmet><title>Notifications — Amrutam Admin</title></Helmet>
      <h1 className="text-2xl font-bold">Notifications</h1>
      <div className="bg-white border rounded-2xl shadow-sm divide-y">
        {items.map(n => (
          <div key={n.id} className="p-4 flex items-center justify-between">
            <div>
              <div className={"font-medium " + (n.read ? "text-gray-500" : "")}>{n.message}</div>
              <div className="text-xs text-gray-400">{formatDate(n.time)}</div>
            </div>
            <button onClick={() => toggle(n.id)} className="px-3 py-1 border rounded-xl">
              Mark {n.read ? "Unread" : "Read"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
