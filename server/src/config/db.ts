import mongoose from "mongoose";

mongoose
	.connect("mongodb://localhost:27017/familly-rollers-db")
	.then(() => {
		console.log("Connected to database");
	})
	.catch((error: Error) => {
		console.log("ERROR:", error);
	});
