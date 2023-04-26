import NewLaunch from "../models/NewLaunch";
import Admin from "../models/Admin";
import { Request, Response } from "express";
import { ObjectId } from "mongoose";
// interface NewLaunchWithId {
//   _id: ObjectId;
// }

const index = async (req: Request, res: Response) => {
  try {
    const newLaunches = await NewLaunch.find({});
    return res.status(200).json(newLaunches);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const { adminId, newLaunch } = req.body;
    console.log("admin: ", adminId);
    console.log("newLaunch: ", newLaunch);

    const createdNewLaunch: any = await NewLaunch.create(newLaunch);
    console.log("CreatedNewLaunch: ", createdNewLaunch);
    const admin = await Admin.findById(adminId as ObjectId);
    admin?.newLaunches.push(createdNewLaunch._id);
    await admin?.save();
    res.status(201).json(createdNewLaunch);
    console.log("created New Launch");
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const updatedNewLaunch = await NewLaunch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedNewLaunch);
    console.log("newLaunch updated!");
  } catch (error) {
    res.status(400).json({ error });
  }
};

const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const newLaunch = await NewLaunch.findById(id);
    console.log("newLaunch: ", newLaunch);
    if (newLaunch) {
      return res.status(200).json(newLaunch);
    } else return res.status(404).json({ error: "New Launch not found." });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteNewLaunch = async (req: Request, res: Response) => {
  try {
    const deletedNewLaunch = await NewLaunch.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedNewLaunch);
  } catch (error) {
    res.status(400).json({ error });
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

export default { index, create, update, show, delete: deleteNewLaunch };
