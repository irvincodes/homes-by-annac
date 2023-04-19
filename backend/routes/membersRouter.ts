import express from "express";
const router = express.Router();
import membersController from "../controllers/membersController";

router.get("/", membersController.index);

module.exports = router;
