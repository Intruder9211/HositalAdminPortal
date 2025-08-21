import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { LayoutDashboard, Users, UserCog, CalendarDays, FileChartColumn, CreditCard, Bell, Settings, User, LogOut, Menu } from "lucide-react";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/patients", label: "Patients", icon: Users },
  { to: "/doctors", label: "Doctors", icon: UserCog },
  { to: "/appointments", label: "Appointments", icon: CalendarDays },
  { to: "/reports", label: "Reports", icon: FileChartColumn },
  { to: "/payments", label: "Payments", icon: CreditCard },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/settings", label: "Settings", icon: Settings },
  { to: "/profile", label: "Profile", icon: User },
];

export default function AdminLayout() {
  const [open, setOpen] = useState(true);
  const loc = useLocation();

  return (
    <div className='h-screen w-full bg-gray-50 text-gray-900'>
      <Helmet>
        <title>Amrutam Admin</title>
      </Helmet>
      <div className='flex h-full'>
        {/* Sidebar */}
        <aside className={`bg-white border-r hidden md:flex md:flex-col transition-all duration-200 ${open ? "w-[var(--sidebar-width)]" : "w-16"}`}>
          <div className='h-16 flex items-center justify-between px-4 border-b'>
            <div className='font-bold tracking-wide'>{open ? "Amrutam Admin" : "AA"}</div>
            <button onClick={() => setOpen(o => !o)} className='p-2 rounded hover:bg-gray-100'>
              <Menu size={20} />
            </button>
          </div>
          <nav className='flex-1 overflow-y-auto p-2 space-y-1'>
            {nav.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 ${isActive ? "bg-gray-100 font-semibold" : ""}`
                }
              >
                <Icon size={20} />
                {open && <span>{label}</span>}
              </NavLink>
            ))}
          </nav>
          <div className='p-3 border-t'>
            <NavLink to='/login' className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100'>
              <LogOut size={20} />
              {open && <span>Logout</span>}
            </NavLink>
          </div>
        </aside>

        {/* Mobile top bar */}
        <div className='md:hidden fixed top-0 left-0 right-0 bg-white border-b h-14 flex items-center justify-between px-3 z-50'>
          <button onClick={() => setOpen(o => !o)} className='p-2 rounded hover:bg-gray-100'>
            <Menu size={20} />
          </button>
          <div className='font-semibold'>Amrutam Admin</div>
          <div className='w-8 h-8 rounded-full bg-gray-200' />
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className='md:hidden fixed inset-0 z-40 flex'>
            <div className='w-64 bg-white border-r p-2'>
              <div className='h-14 flex items-center px-2 border-b font-bold'>Amrutam Admin</div>
              <nav className='py-2 space-y-1'>
                {nav.map(({ to, label, icon: Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 ${isActive ? "bg-gray-100 font-semibold" : ""}`
                    }
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </NavLink>
                ))}
              </nav>
            </div>
            <div className='flex-1 bg-black/20' onClick={() => setOpen(false)} />
          </div>
        )}

        {/* Main content */}
        <div className='flex-1 flex flex-col min-w-0'>
          <header className='hidden md:flex h-16 items-center justify-between bg-white border-b px-4'>
            <div className='text-sm text-gray-500'>Path: {loc.pathname}</div>
            <div className='flex items-center gap-3'>
              <div className='hidden md:block'>
                <input className='border rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring' placeholder='Search…' />
              </div>
              <div className='w-9 h-9 rounded-full bg-gray-200' />
            </div>
          </header>
          <main className='flex-1 overflow-y-auto p-4 md:p-6 pt-16 md:pt-6'>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
