import Member from "../models/Member";
import { Request, Response } from "express";

const index = async (req: Request, res: Response) => {
  try {
    console.log("All Members.");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newMember = new Member({
      name,
      email,
      password,
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

export default { index, create };
