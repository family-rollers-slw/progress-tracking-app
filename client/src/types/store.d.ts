import { User } from "./user";

export interface Store {
	user?: User?;
}

export interface Actions {
	setUser: (by: User) => void;
	clearUser: () => void;
}
