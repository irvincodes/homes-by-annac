import express from "express";
const router = express.Router();
import adminsController from "../controllers/adminsController";

router.get("/seed", adminsController.seed);
// router.get("/", adminsController.index);
router.post("/login", adminsController.login);

module.exports = router;
