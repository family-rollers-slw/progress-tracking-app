import { Request } from "express";
import { User } from "@shared-types/user";
import { JwtPayload } from "jsonwebtoken";

export interface IGetUserAuthInfoRequest extends Request {
	user: User;
}

export interface IJwtPayloadAuthUser extends JwtPayload {
	user: User;
}
