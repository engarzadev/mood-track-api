import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import moodRoutes from "./routes/moods";

const allowedOrigins = [
  "http://localhost:5173", // for local dev
  "https://mood-track-ebd7m46bi-engarzadevs-projects.vercel.app/" // update this
];

dotenv.config();
const app = express();
app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true
}));app.use(express.json());
app.use("/moods", moodRoutes);

mongoose.connect(process.env.MONGO_URI!).then(() => console.log("MongoDB connected"));

export default app;
