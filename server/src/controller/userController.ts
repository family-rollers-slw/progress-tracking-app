import express, { Request, Response } from "express";
// import bcrypt from "bcryptjs";
import User from "../models/User";
import { User as IUser } from "@shared-types/user";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

const logIn = async (
	req: Request,
	res: Response
): Promise<Response<string, object>> => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({ msg: "Email not found." });
		}

		if (user.password !== password) {
			return res
				.status(403)
				.json({ msg: "Email or Password incorrect." });
		}

		return res.status(200).json({ msg: "Logged!", data: user });
	} catch (error) {
		return res.status(500).json({ error });
	}
};

const signIn = async (
	req: Request,
	res: Response
): Promise<Response<string, object>> => {
	try {
		const userReq: IUser = req.body;

		let newUser = await User.findOne({ email: userReq.email });

		if (newUser) {
			return res.status(400).json({ msg: "Email is already registered" });
		}

		newUser = new User(userReq);
		await newUser.save();

		const payload = {
			user: {
				name: newUser.id,
			},
		};

		jwt.sign(
			payload,
			"my custom scret 123123",
			{ expiresIn: "1 hour" },
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			}
		);
		return res.status(200).json(payload);
	} catch (error) {
		console.log("ERROR: ", error);
		return res.status(500).json({ error });
	}
};

const getAllUsers = async (
	_req: Request,
	res: Response
): Promise<Response<string, object>> =>
	res.status(200).json({ msg: "Connection with the server stablished" });

userRouter.post("/login", logIn);
userRouter.post("/", signIn);
userRouter.get("/", getAllUsers);

export default userRouter;
