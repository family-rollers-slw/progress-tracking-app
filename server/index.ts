import express, { Express } from "express";
import cors from "cors";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
import "./src/config/db";
import userRouter from "./src/controller/userController";

// import dotenv from "dotenv";
// Move to config file or env var
const port = 3001;

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

app.listen(port, () => console.log(`Server listening on port -> ${port}`));
