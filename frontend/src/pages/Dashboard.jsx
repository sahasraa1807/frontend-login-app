// frontend/src/pages/Dashboard.jsx
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AppContext);  // ✅ fixed
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user);
      setLoading(false);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
      if (setIsAuthenticated) setIsAuthenticated(false); // ✅ safety check
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (setIsAuthenticated) setIsAuthenticated(false); // ✅ safety check
    navigate("/");
  };

  if (loading) return <div className="text-center mt-10 text-gray-500">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="flex justify-between items-center px-8 py-6 border-b border-gray-700">
        <h1 className="text-2xl font-semibold">Welcome, {user?.name || "User"} 👋</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-all duration-200"
        >
          Logout
        </button>
      </div>

      <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-red-500/20 transition">
          <h2 className="text-lg font-semibold mb-2">Profile Overview</h2>
          <p>Email: {user?.email}</p>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
          <h2 className="text-lg font-semibold mb-2">Account Status</h2>
          <p>Authenticated ✅</p>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-green-500/20 transition">
          <h2 className="text-lg font-semibold mb-2">Next Steps</h2>
          <p>Keep building your project and impress the internship team!</p>
        </div>
      </div>
    </div>
  );
}
