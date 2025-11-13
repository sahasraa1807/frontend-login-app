// frontend/src/pages/Register.jsx
import { useState } from "react";
import API from "../utils/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { name, email, password });
      // After register, redirect to login
      navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form onSubmit={handleRegister} className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Create account</h2>
        <input className="border p-2 rounded mb-3 w-full" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input className="border p-2 rounded mb-3 w-full" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
        <input className="border p-2 rounded mb-3 w-full" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button className="w-full bg-indigo-600 text-white py-2 rounded">Register</button>
        <p className="mt-4 text-center text-sm">Already have account? <Link to="/" className="text-indigo-600">Login</Link></p>
      </form>
    </div>
  );
}
