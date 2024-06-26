//imports
import express from "express";
import Abouts from "./router/about.routes.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import "./config/db.js";
import skillRoutes from "./router/skills.routes.js";
const app = express();

//routes and middleware
app.use(express.json());
app.use(Abouts);
app.use(skillRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); //it provide file from specific folder
//port
let Port = process.env.Port || 5000;
app.listen(Port, () => {
  console.log(`Server started at  http://localhost:${Port}/ `);
});
