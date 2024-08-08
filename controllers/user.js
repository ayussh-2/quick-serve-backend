import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateToken } from "../libs/generateToken.js";
import { giveError } from "../libs/giveError.js";
import { generateOTP } from "../libs/genOTP.js";
import { sendEmail } from "../libs/sendEmail.js";

const otp = generateOTP();
async function createUser(req, res) {
    const { email } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "Email already in use",
                status: "error",
            });
        }

        const html = `<h1>Your OTP is ${otp}</h1>`;
        await sendEmail(email, "OTP for registration", html);
        return res.status(200).json({
            message: "OTP sent to your email",
            status: "success",
            data: req.body,
        });
    } catch (err) {
        giveError(err, res);
    }
}

async function checkOTP(req, res) {
    try {
        if (req.body.otp !== otp) {
            return res.status(400).json({
                message: "Invalid OTP",
                status: "error",
            });
        }
        const { password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            ...req.body,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(201).json({
            message: "User created successfully",
            status: "success",
        });
    } catch (error) {
        giveError(error, res);
    }
}

async function loginUser(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "User Not Found",
                status: "error",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "User Not Found",
                status: "error",
            });
        }

        const token = generateToken(user);

        res.status(200).json({
            message: "User logged in successfully",
            status: "success",
            token,
        });
    } catch (err) {
        giveError(err, res);
    }
}

function googleCallback(req, res) {
    console.log(req.user);
    res.status(200).json({
        message: "Login Succesfull",
        status: "success",
    });
}
export { createUser, loginUser, googleCallback, checkOTP };
