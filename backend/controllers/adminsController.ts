import { Request, Response } from "express";
import Admin from "../models/Admin";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// const index = async (req: Request, res: Response) => {
//   try {
//     console.log("All Members.");
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

const seed = async (req: Request, res: Response) => {
  const newAdmin = await Admin.create({
    name: "Anna Chong",
    email: "annachong.property@gmail.com",
    password: "123456",
    accountType: "Admin",
  });
  res.status(200).json(newAdmin);
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userAttempt = { email, password };

  try {
    const admin = await Admin.findOne({ email: userAttempt.email });
    if (!admin) {
      return res.status(404).json({ message: "Invalid email." });
    }
    const passwordMatch = await bcrypt.compare(
      userAttempt.password,
      admin.password
    );
    if (!passwordMatch) {
      return res.status(404).json({ message: "Incorrect password." });
    }
    const payload = {
      name: admin.name,
      email: admin.email,
      accountType: admin.accountType,
      _id: admin._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "3h",
    });
    return res.status(200).json(token);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default { seed, login };
