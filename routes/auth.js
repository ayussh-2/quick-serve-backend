import express from "express";
import {
    loginUser,
    createUser,
    googleCallback,
    checkOTP,
} from "../controllers/user.js";
import passport from "passport";

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", createUser);

router.post("/validate-otp", checkOTP);

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

router.get(
    "/callback/google",
    passport.authenticate("google", { failureRedirect: "/" }),
    googleCallback
);

export default router;
