import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

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

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

export default mongoose.model("Admin", adminSchema);
