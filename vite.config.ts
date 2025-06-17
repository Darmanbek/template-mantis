import { tanstackRouter } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import * as path from "node:path"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
			verboseFileRoutes: true,
			semicolons: false,
			quoteStyle: "double",
		}),
		react(),
		visualizer({
			open: true,
		}),
	],
	resolve: {
		alias: {
			src: path.resolve(__dirname, "./src"),
		},
	},
	build: {
		minify: "esbuild",
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
	},
})
