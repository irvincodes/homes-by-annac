import Member from "../models/Member";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
      _id: member._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "3h",
    });
    return res.status(200).json(token);
  } catch (error) {
    res.status(500).json(error);
  }
};

const show = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const memberBookmarks = await Member.findById(id).populate(
      "bookmarkedLaunches"
    );
    if (!memberBookmarks) {
      return res.status(404).json({ message: "Invalid consumer." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { bookmarkId } = req.body;
  try {
    const member = await Member.findById(id);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    const bookmarks = member?.bookmarkedLaunches;

    if (bookmarks?.includes(bookmarkId)) {
      const filteredBookmarks = bookmarks.filter(
        (b) => b.toString() !== bookmarkId
      );
      member.bookmarkedLaunches = filteredBookmarks;
    } else {
      bookmarks?.push(bookmarkId);
    }
    const updatedMember = await member?.save();
    res.status(200).json(updatedMember?.bookmarkedLaunches);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export default { create, login, show, update };
