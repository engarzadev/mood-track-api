import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import moodRoutes from "./routes/moods";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/moods", moodRoutes);

mongoose.connect(process.env.MONGO_URI!).then(() => console.log("MongoDB connected"));

export default app;
