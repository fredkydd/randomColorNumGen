import * as dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();
const app = express(), __filename = fileURLToPath(import.meta.url), __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/", (req, res) => res.sendFile(__dirname + "/randomGrid.html"));

app.listen(process.env.PORT, console.log(`server is running on ${process.env.PORT} port 🚨`));
