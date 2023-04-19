import mongoose from "mongoose";
const { Schema } = mongoose;

const memberSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    bookmarkedLaunches: {
      type: mongoose.Types.ObjectId,
      ref: "NewLaunch",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", memberSchema);
