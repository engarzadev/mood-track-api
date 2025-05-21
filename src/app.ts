import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import moodRoutes from "./routes/moods";

dotenv.config();

const app = express();

// ✅ Allow your Vercel frontend here
const allowedOrigins = [
  "http://localhost:5173",
  "https://mood-track-7mbjrnvsn-engarzadevs-projects.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true
}));

app.use(express.json());
app.use("/moods", moodRoutes);

mongoose.connect(process.env.MONGO_URI!).then(() => console.log("MongoDB connected"));

export default app;
