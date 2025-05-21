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
  origin: [
    "http://localhost:5173",
    "https://mood-track-7mbjrnvsn-engarzadevs-projects.vercel.app"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());
app.use("/moods", moodRoutes);

mongoose.connect(process.env.MONGO_URI!).then(() => console.log("MongoDB connected"));

export default app;
