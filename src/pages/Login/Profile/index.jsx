import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

export default function Profile() {
  const [form, setForm] = useState({ name: "Admin User", email: "admin@amrutam.com", phone: "+91 98765 43210" });
  useEffect(() => { const s = localStorage.getItem("profile"); if (s) setForm(JSON.parse(s)); }, []);
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const save = () => { localStorage.setItem("profile", JSON.stringify(form)); alert("Saved (mock)"); };

  return (
    <div className="space-y-4 max-w-2xl">
      <Helmet><title>Profile — Amrutam Admin</title></Helmet>
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
        <div><label className="text-sm block mb-1">Name</label><input name="name" value={form.name} onChange={onChange} className="border rounded-xl px-3 py-2 w-full" /></div>
        <div><label className="text-sm block mb-1">Email</label><input name="email" value={form.email} onChange={onChange} className="border rounded-xl px-3 py-2 w-full" /></div>
        <div><label className="text-sm block mb-1">Phone</label><input name="phone" value={form.phone} onChange={onChange} className="border rounded-xl px-3 py-2 w-full" /></div>
        <button onClick={save} className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90">Save</button>
      </div>
    </div>
  );
}
