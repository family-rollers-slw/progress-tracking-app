import express, { Express } from "express";
import cors from "cors";
import "./config/db";
import UserController from "./controller/UserController";
import { Controller } from "./general/interfaces/Controller";
import "dotenv/config";

const port = process.env.FR_PORT;

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
		this._app.set("port", port);
	}

	private registerRoutes = () => {
		const controllers: Controller[] = [new UserController()];

		controllers.forEach((controller) =>
			this._app.use(controller.getPath(), controller.getRoutes())
		);
	};

	public start() {
		try {
			this._app.listen(port, () =>
				console.log(`Server listening on port -> ${port}`)
			);
		} catch (error) {
			console.error("Error trying to start server", error);
		}
	}
}
