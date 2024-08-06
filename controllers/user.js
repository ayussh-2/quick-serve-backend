import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateToken } from "../libs/generateToken.js";
import { giveError } from "../libs/giveError.js";

async function createUser(req, res) {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "Email already in use",
                status: "error",
            });
        }

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
    } catch (err) {
        giveError(err, res);
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

export { createUser, loginUser };
