import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Skip backend for now; assume login success
    navigate("/dashboard");
  };

  return (
    <div className="center-page glass-card">
      <div className="auth-card">
        <h2>Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={handleLogin} className="btn-grad">Login</button>

        <p className="link-text">
          Don’t have an account? <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
}
