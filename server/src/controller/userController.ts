import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";
import { User as IUser } from "@shared-types/user";
import jwt from "jsonwebtoken";
import { Controller } from "../general/interfaces/Controller";
import auth from "../middlewares/auth";

const CUSTOM_TEMPT_SECRET_HEY = "my custom scret 123123";

class UserController implements Controller {
	private readonly _path: string = "/api/users";
	public getPath(): string {
		return this._path;
	}

	public getRoutes = () => {
		const routes = Router();
		routes.post("/login", this.logIn);
		routes.post("/", this.signIn);
		routes.get("/", auth, this.getAllUsers);
		return routes;
	};

	private async logIn(
		req: Request,
		res: Response
	): Promise<Response<string, object>> {
		try {
			const { email, password } = req.body;
			const user = await User.findOne({ email });

			if (!user) {
				return res.status(404).json({ msg: "Email not found." });
			}

			if (!user.password) {
				return res.status(400).json({ msg: "Password is required" });
			}

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res
					.status(403)
					.json({ msg: "Email or Password incorrect." });
			}

			const payload = {
				user: {
					id: user.id,
				},
			};

			const token: string = jwt.sign(payload, CUSTOM_TEMPT_SECRET_HEY, {
				expiresIn: "15s",
			});

			return res.status(200).json({ msg: "Logged!", data: user, token });
		} catch (error) {
			return res.status(500).json({ error });
		}
	}

	private async signIn(
		req: Request,
		res: Response
	): Promise<Response<string, object>> {
		try {
			const userReq: IUser = req.body;

			let newUser = await User.findOne({ email: userReq.email });
			console.log("NEW USER:", newUser?.toJSON());
			if (newUser) {
				return res
					.status(400)
					.json({ msg: "Email is already registered" });
			}

			if (!userReq.password) {
				return res.status(400).json({ msg: "Password is required" });
			}

			const salt = await bcrypt.genSalt(10);

			newUser = new User({
				...userReq,
				password: await bcrypt.hash(userReq.password, salt),
			});
			await newUser.save();

			const payload = {
				user: {
					id: newUser.id,
				},
			};

			const token = jwt.sign(payload, CUSTOM_TEMPT_SECRET_HEY, {
				expiresIn: "1h",
			});
			return res.status(200).json({ token, payload });
		} catch (error) {
			console.log("ERROR: ", error);
			return res.status(500).json({ error });
		}
	}

	private async getAllUsers(_req: Request, res: Response) {
		try {
			const users = await User.find().select("-password");
			return res.status(200).json({ users });
		} catch (error) {
			return res.status(500).json({ error });
		}
	}
}

export default UserController;
