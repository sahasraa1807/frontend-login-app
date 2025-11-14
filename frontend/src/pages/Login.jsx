import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // 1. Validation
    if (!email || !password) {
      return setError("Email and Password are required");
    }

    try {
      // 2. API Call
      const res = await API.post("/auth/login", { email, password });

      // 3. Store token
      localStorage.setItem("token", res.data.token);

      // 4. Navigate to dashboard
      navigate("/dashboard");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="glass-card auth-card">
      <h2>Login</h2>

      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn-grad" onClick={handleLogin}>
        Login
      </button>

      <p className="link-text">
        Don't have an account? <span onClick={() => navigate("/register")}>Register</span>
      </p>
    </div>
  );
}
