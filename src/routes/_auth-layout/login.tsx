import { createFileRoute } from "@tanstack/react-router"
import { LoginPage } from "src/pages/auth/login"

export const Route = createFileRoute("/_auth-layout/login")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<LoginPage />
		</>
	)
}
