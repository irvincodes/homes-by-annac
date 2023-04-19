import express from "express";
const router = express.Router();
import newLaunchesController from "../controllers/newLaunchesController";

router.get("/", newLaunchesController.index);
router.post("/", newLaunchesController.create);

module.exports = router;
