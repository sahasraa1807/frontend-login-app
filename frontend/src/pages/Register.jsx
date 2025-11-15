import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

export default function Register() {
  const navigate = useNavigate();
  
  // --- ADDED THIS STATE ---
  const [name, setName] = useState("");
  // ------------------------

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // --- UPDATED VALIDATION ---
    if (!name || !email || !password) {
      return setError("All fields are required");
    }
    // --------------------------

    try {
      // --- UPDATED API CALL ---
      const res = await API.post("/auth/register", { name, email, password });
      // ------------------------

      setSuccess("Registration successful! Redirecting...");
      setTimeout(() => navigate("/"), 1500);

    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="glass-card auth-card">
      <h2>Register</h2>

      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
      {success && <p style={{ color: "lightgreen", marginBottom: "10px" }}>{success}</p>}

      {/* --- ADDED THIS INPUT --- */}
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* ------------------------ */}

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

      <button className="btn-grad" onClick={handleRegister}>
        Register
      </button>

      <p className="link-text">
        Already have an account? <span onClick={() => navigate("/")}>Login</span>
      </p>
    </div>
  );
}