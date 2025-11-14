import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/dashboard");
  };

  return (
    <div className="center-page glass-card">
      <div className="auth-card">
        <h2>Register</h2>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={handleRegister} className="btn-grad">Register</button>

        <p className="link-text">
          Already have an account? <span onClick={() => navigate("/")}>Login</span>
        </p>
      </div>
    </div>
  );
}
