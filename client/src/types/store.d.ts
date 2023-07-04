import { User } from "@shared-types/user";

export interface Store {
	user?: User?;
}

export interface Actions {
	setUser: (by: User) => void;
	clearUser: () => void;
}
