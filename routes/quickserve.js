import express from "express";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = express.Router();

router.get("/protected", authenticateToken, (req, res) => {
    res.json({ message: "This is a protected route" });
});

export default router;
