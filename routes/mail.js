import express from "express";
import { getMailTemplate } from "../extras/mailTemplate.js";
import { sendEmail } from "../libs/sendEmail.js";
const router = express.Router();

router.post("/", async function (req, res) {
    try {
        const toEmail = req.body.toEmail;
        const subject = req.body.subject;
        const mailcontent = getMailTemplate({ content: req.body.content });
        const data = await sendEmail(toEmail, subject, mailcontent);
        res.status(200).json({
            message: "Email sent successfully",
            data: data,
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to send email", error: error });
    }
});

export default router;
