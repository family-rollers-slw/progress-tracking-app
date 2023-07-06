import jwt from "jsonwebtoken";
import { Request, RequestHandler } from "express";

const CUSTOM_TEMPT_SECRET_HEY = "my custom scret 123123";

const auth: RequestHandler = (req: Request, res, next) => {
	const token = req.header("Authorization");

	if (!token) {
		return res.status(401).json({ msg: "Authorization denied." });
	}

	// Verify token
	try {
		jwt.verify(token, CUSTOM_TEMPT_SECRET_HEY, (error) => {
			if (error) {
				console.log("ERROR", error);
				return res.status(401).json({ msg: "Token is not valid" });
			} else {
				next();
				return;
			}
		});
		return null;
	} catch (error) {
		return res.status(500).json({ msg: "Server Error" });
	}
};

export default auth;
