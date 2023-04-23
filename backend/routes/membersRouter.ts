import express from "express";
const router = express.Router();
import membersController from "../controllers/membersController";

router.get("/", membersController.index);
router.post("/", membersController.create);

module.exports = router;
