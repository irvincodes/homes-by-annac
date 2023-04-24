import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

const memberSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    accountType: { type: String, default: "Member" },
    bookmarkedLaunches: [
      {
        type: mongoose.Types.ObjectId,
        ref: "NewLaunch",
        default: "",
      },
    ],
  },
  { timestamps: true }
);

memberSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

export default mongoose.model("Member", memberSchema);
