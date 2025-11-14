import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import jwt from "jsonwebtoken";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "https://mini-dashboard-project.vercel.app",  // your frontend live link
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => res.send("✅ Backend server is running!"));

app.use("/api/auth", authRoutes);

app.get("/api/dashboard", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return res.status(200).json({
      message: `Welcome, ${decoded.email}!`,
      data: {
        totalUsers: 257,
        totalProjects: 43,
        uptime: "99.9%",
        activeSessions: 17,
      },
    });
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ message: "Something went wrong" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running live on port ${PORT}`)
);
