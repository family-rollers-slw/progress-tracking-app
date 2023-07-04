import { User } from "@shared-types/user";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema<User>({
	name: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	src: { type: String },
	password: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
