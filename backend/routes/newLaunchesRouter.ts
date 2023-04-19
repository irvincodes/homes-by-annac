import express from "express";
const router = express.Router();
import newLaunchesController from "../controllers/newLaunchesController";

router.get("/", newLaunchesController.index);

module.exports = router;
