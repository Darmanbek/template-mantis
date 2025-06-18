import { createRootRouteWithContext, Outlet } from "@tanstack/react-router"
import type { AuthContext } from "src/shared/context"

export const Route = createRootRouteWithContext<{
	auth?: AuthContext
}>()({
	component: RootComponent,
})

function RootComponent() {
	return (
		<>
			<Outlet />
		</>
	)
}
