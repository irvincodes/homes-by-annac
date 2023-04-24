import express from "express";
const router = express.Router();
import membersController from "../controllers/membersController";

router.get("/", membersController.index);
router.post("/", membersController.create);
router.post("/login", membersController.login);

module.exports = router;
