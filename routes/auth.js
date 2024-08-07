import express from "express";
import { loginUser, createUser } from "../controllers/user.js";

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", createUser);

export default router;
