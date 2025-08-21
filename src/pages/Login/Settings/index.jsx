import { Helmet } from "react-helmet-async";

export default function Settings() {
  return (
    <div className="p-6">
      <Helmet>
        <title>Settings — Amrutam Admin</title>
      </Helmet>

      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="bg-white shadow rounded-2xl p-6 max-w-2xl">
        <form className="space-y-6">
          {/* Profile Settings */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Admin User"
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="admin@amrutam.com"
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Password Settings */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Password</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Current Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">New Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Notifications</h2>
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-indigo-600" />
                <span>Email Notifications</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-indigo-600" />
                <span>Push Notifications</span>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
