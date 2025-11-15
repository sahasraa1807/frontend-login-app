import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import jwt from "jsonwebtoken";

dotenv.config();
connectDB();

const app = express();

// ---------------------
//     FIXED CORS
// ---------------------


app.use(cors({
  origin: [
     "http://localhost:5173",
    "https://frontend-login-app-mini.vercel.app",
  ],
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));


// Body parsing
app.use(express.json());

// Test route
app.get("/", (req, res) => res.send("Backend is Live!"));

// Auth routes
app.use("/api/auth", authRoutes);

// Protected dashboard
app.get("/api/dashboard", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    res.json({
      message: `Welcome ${decoded.email}`,
      data: {
        totalUsers: 257,
        totalProjects: 43,
        uptime: "99.9%",
        activeSessions: 17,
      },
    });
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
