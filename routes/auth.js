import express from "express";
import { loginUser, createUser } from "../controllers/user.js";

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", createUser);

router.get("/logout", (req, res) => {
    res.status(200).json({ message: "Logout successful" });
});

export default router;
