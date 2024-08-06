import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { jsonParser } from "./middlewares/jsonparser.js";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";

config();

const app = express();
app.use(cors());
// app.use(jsonParser);
app.use(express.json()); // Directly using express.json() middleware

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.use("/api/auth", authRoutes);

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
