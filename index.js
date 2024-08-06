import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { jsonParser } from "./middlewares/jsonparser.js";
import { connectDB } from "./config/db.js";

config();

const app = express();
app.use(cors());
app.use(jsonParser);
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
