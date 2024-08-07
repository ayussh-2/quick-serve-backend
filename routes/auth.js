import express from "express";
import { loginUser, createUser, googleCallback } from "../controllers/user.js";
import passport from "passport";

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", createUser);

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["https://www.googleapis.com/auth/plus.login"],
    })
);

router.get(
    "/callback/google",
    passport.authenticate("google", { failureRedirect: "/" }),
    googleCallback
);

export default router;
