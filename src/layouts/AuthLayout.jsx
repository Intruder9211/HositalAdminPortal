import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className='min-h-screen grid place-items-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-6'>
      <Outlet />
    </div>
  );
}
