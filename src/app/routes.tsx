import { createRouter } from "@tanstack/react-router"
import { routeTree } from "src/routeTree.gen.ts"

export const routes = createRouter({
	routeTree,
	context: {
		auth: undefined,
	},
})
