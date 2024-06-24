import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [react(), dts({ insertTypesEntry: true })],
	build: {
		lib: {
			entry: "src/index.ts",
			name: "shell-router",
			fileName: "index",
		},
		rollupOptions: {
			external: ["react", "react-dom", "react-router-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react-router-dom": "ReactRouterDOM",
				},
			},
		},
	},
});
