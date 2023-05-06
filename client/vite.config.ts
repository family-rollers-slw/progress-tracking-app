import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import tsChecker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		proxy: {
			"/api": "localhost",
		},
	},
	base: "",
	plugins: [
		react(),
		tsconfigPaths(),
		tsChecker({ typescript: true }),
		svgrPlugin({
			svgrOptions: {
				icon: true,
			},
		}),
	],
});
