import express from "express";
const router = express.Router();
import newLaunchesController from "../controllers/newLaunchesController";
import uploadFileController from "../controllers/uploadFileController";

router.get("/", newLaunchesController.index);
router.post("/", newLaunchesController.create);
router.post("/gallery", uploadFileController.uploadImage);
router.post("/sitefloorplans", uploadFileController.uploadImage);
router.post("/availabilityPrice", uploadFileController.uploadImage);

module.exports = router;
