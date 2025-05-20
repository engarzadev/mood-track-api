import mongoose from "mongoose";

const MoodSchema = new mongoose.Schema({
  mood: { type: Number, required: true },
  note: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Mood", MoodSchema);
