import Member from "../models/Member";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const index = async (req: Request, res: Response) => {
  try {
    console.log("All Members.");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const { name, email, password, accountType } = req.body;
    const newMember = new Member({
      name,
      email,
      password,
      accountType,
    });
    newMember.save();
    if (newMember) {
      return res
        .status(201)
        .json({ message: "Member created successfully: ", newMember });
    } else {
      return res.status(400).json({ message: "Invalid form details." });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userAttempt = { email, password };

  try {
    const member = await Member.findOne({ email: userAttempt.email });
    if (!member) {
      return res.status(404).json({ message: "Invalid email." });
    }
    const passwordMatch = await bcrypt.compare(
      userAttempt.password,
      member.password
    );
    if (!passwordMatch) {
      return res.status(404).json({ message: "Incorrect password." });
    }
    const payload = {
      name: member.name,
      email: member.email,
      accountType: member.accountType,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "3h",
    });
    return res.status(200).json(token);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default { index, create, login };
