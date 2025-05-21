import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import moodRoutes from "./routes/moods";

dotenv.config();

const app = express();

// ✅ CORS config that handles preflight and multiple origins
app.use(cors({
  origin: "*", // Use "*" for dev, restrict later
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// ✅ Explicitly handle preflight requests
app.options("*", cors());

app.use(express.json());
app.use("/moods", moodRoutes);

mongoose.connect(process.env.MONGO_URI!).then(() =>
  console.log("MongoDB connected")
);

export default app;
