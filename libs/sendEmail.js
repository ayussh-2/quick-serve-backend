import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function sendEmail(toEmail, subject, html) {
    try {
        const mailOptions = {
            from: `Quick Serve <${process.env.EMAIL_USER}>`,
            to: toEmail,
            subject: subject,
            html: html,
        };

        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
