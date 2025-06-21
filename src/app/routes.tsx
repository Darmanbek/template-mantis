import { createRouter } from "@tanstack/react-router"
import { NotFoundPage } from "src/pages/not-found"
import { routeTree } from "src/routeTree.gen.ts"

export const routes = createRouter({
	routeTree,
	context: {
		auth: undefined,
	},
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	scrollRestoration: true,
	defaultNotFoundComponent: NotFoundPage,
})
