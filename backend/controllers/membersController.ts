import Member from "../models/Member";
import { Request, Response } from "express";

const index = async (req: Request, res: Response) => {
  try {
    console.log("All Members.");
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default { index };
