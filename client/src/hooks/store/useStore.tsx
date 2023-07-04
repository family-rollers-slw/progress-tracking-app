import { Actions, Store } from "types/store";
import { create } from "zustand";
import { StateCreator } from "zustand/vanilla";
import { User } from "@shared-types/user";

const useStore: StateCreator<Store & Actions> = (set) => ({
	setUser: (user: User) => set(() => ({ user })),
	clearUser: () => set(() => ({ user: null })),
});

export default create<Store & Actions>()(useStore);
