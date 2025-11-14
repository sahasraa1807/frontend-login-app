import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-main">

      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-cards">

        <div className="glass-card dashboard-card">
          <h2>Card 1</h2>
          <p>Content here...</p>
        </div>

        <div className="glass-card dashboard-card">
          <h2>Card 2</h2>
          <p>Content here...</p>
        </div>

        <div className="glass-card dashboard-card">
          <h2>Card 3</h2>
          <p>Content here...</p>
        </div>

      </div>

      <button className="logout-btn" onClick={() => navigate("/")}>
        Logout
      </button>

    </div>
  );
}
