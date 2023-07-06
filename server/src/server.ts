import express, { Express } from "express";
import cors from "cors";
import "./config/db";
import UserController from "./controller/UserController";
import { Controller } from "./general/interfaces/Controller";

// Routes
// import UserRouter from "./controller/UserController";

// import dotenv from "dotenv";
// Move to config file or env var
const HARDCODED_PORT = 3001;

export default class Server {
	private readonly _app: Express;

	get app(): Express {
		return this._app;
	}

	constructor() {
		this._app = express();
		this._app.use(cors());
		this._app.use(express.json());
		this.registerRoutes();
		this._app.set("port", HARDCODED_PORT);
	}

	private registerRoutes = () => {
		const controllers: Controller[] = [new UserController()];

		controllers.forEach((controller) =>
			this._app.use(controller.getPath(), controller.getRoutes())
		);
	};

	public start() {
		try {
			this._app.listen(HARDCODED_PORT, () =>
				console.log(`Server listening on port -> ${HARDCODED_PORT}`)
			);
		} catch (error) {
			console.error("Error trying to start server", error);
		}
	}
}
