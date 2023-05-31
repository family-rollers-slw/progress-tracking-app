import { Actions, Store } from "types/store";
import { User } from "types/user";
import { create } from "zustand";
import { StateCreator } from "zustand/vanilla";

const useStore: StateCreator<Store & Actions> = (set) => ({
	setUser: (user: User) => set(() => ({ user })),
	clearUser: () => set(() => ({ user: null })),
});

export default create<Store & Actions>()(useStore);
