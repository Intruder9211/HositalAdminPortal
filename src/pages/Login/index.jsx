import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Login() {
  const nav = useNavigate();
  const submit = e => { e.preventDefault(); nav("/dashboard"); };

  return (
    <div className="w-full max-w-md bg-white border rounded-2xl shadow-sm p-6">
      <Helmet><title>Login — Amrutam Admin</title></Helmet>
      <h1 className="text-2xl font-bold">Welcome back</h1>
      <p className="text-sm text-gray-500 mb-6">Sign in to Admin Portal</p>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="text-sm block mb-1">Email</label>
          <input type="email" required className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring" placeholder="you@amrutam.com" />
        </div>
        <div>
          <label className="text-sm block mb-1">Password</label>
          <input type="password" required className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full bg-black text-white rounded-xl py-2 font-semibold hover:opacity-90">Sign In</button>
      </form>
    </div>
  );
}

