import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./pages/Login/index.jsx";
import Dashboard from "./pages/Login/Dashboard/index.jsx";
import Patients from "./pages/Login/Patients/index.jsx";
import Doctors from "./pages/Login/Doctors/index.jsx";
import Appointments from "./pages/Login/Appointments/index.jsx";
import Reports from "./pages/Login/Reports/index.jsx";
import Payments from "./pages/Login/Payments/index.jsx";
import Settings from "./pages/Login/Settings/index.jsx";
import Notifications from "./pages/Login/Notifications/index.jsx";
import Profile from "./pages/Login/Profile/index.jsx";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace />} />
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/patients' element={<Patients />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/appointments' element={<Appointments />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/profile' element={<Profile />} />
      </Route>

      <Route path='*' element={<Navigate to='/dashboard' replace />} />
    </Routes>
  );
}
