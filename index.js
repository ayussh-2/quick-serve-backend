import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { jsonParser } from "./middlewares/jsonparser.js";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";
import quickserveRoutes from "./routes/quickserve.js";

config();

const app = express();
app.use(cors());
app.use(jsonParser);

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.use("/api/auth", authRoutes);
app.use("/api/quickserve", quickserveRoutes);

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
