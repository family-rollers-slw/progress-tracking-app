import mongoose from "mongoose";

mongoose
	.connect("mongodb://127.0.0.1:27017/familly-rollers-db")
	.then(() => console.info("Connected to mongo database"))
	.catch(() => console.error("Error connecting to database"));
