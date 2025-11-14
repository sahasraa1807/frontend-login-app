import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return navigate("/");

    API.get("/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => setData(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/");
      });
  }, []);

  return (
    <div className="dashboard-wrapper">
      <h1>Dashboard</h1>
      <button className="logout-btn" onClick={() => {
        localStorage.removeItem("token");
        navigate("/");
      }}>
        Logout
      </button>
    </div>
  );
}
