import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import path from "path";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      "/api": "localhost",
    },
  },
  base: '',
  plugins: [
    react(),
	tsconfigPaths(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    })
  ],
});
