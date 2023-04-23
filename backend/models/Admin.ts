import mongoose from "mongoose";
const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    accountType: { type: String, default: "Admin" },
    newLaunches: {
      type: mongoose.Types.ObjectId,
      ref: "NewLaunch",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
