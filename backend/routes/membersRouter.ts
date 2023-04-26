import express from "express";
const router = express.Router();
import membersController from "../controllers/membersController";
import auth from "../controllers/auth";

router.get("/:id", auth.isAuth(["Member"]), membersController.show);
router.put("/:id", auth.isAuth(["Member"]), membersController.update);
router.post("/", membersController.create);
router.post("/login", membersController.login);

module.exports = router;
