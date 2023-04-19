import express from "express";
const router = express.Router();
import adminsController from "../controllers/adminsController";

router.get("/", adminsController.index);

module.exports = router;
