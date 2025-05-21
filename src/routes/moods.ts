import express from "express";
import Mood from "../models/Mood";

const router = express.Router();

router.get("/", async (_, res) => {
  const moods = await Mood.find().sort({ date: -1 });
  res.json(moods);
});

router.post("/", async (req, res) => {
  const mood = await Mood.create(req.body);
  res.json(mood);
});

export default router;
