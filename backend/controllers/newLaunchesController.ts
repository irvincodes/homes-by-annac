import NewLaunch from "../models/NewLaunch";
import { Request, Response } from "express";

const index = async (req: Request, res: Response) => {
  try {
    console.log("All New Launches.");
  } catch (error) {
    return res.status(500).json(error);
  }
};

// const seed = async (req, res) => {
//   try {
//     const newNewLaunch = await NewLaunch.create({
//       name: "asd",
//       developer: "asd",
//       type: "asd",
//       units: 11,
//       siteArea: "asd",
//       expTOP: "asd",
//       address: "asd",
//       district: "D27 - Yishun, Sembawang",
//       tenure: "Freehold",
//       description: "asd",
//       keyPoints: "asd",
//       gallery: "asd",
//       siteFloorPlans: "asd",
//       availabilityPrice: "asd",
//     });
//     res.status(200).json(newNewLaunch);
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };

export default { index };
