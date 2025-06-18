import { createFileRoute } from "@tanstack/react-router"
import { RegisterPage } from "src/pages/auth/register"

export const Route = createFileRoute("/_auth-layout/register")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<RegisterPage />
		</>
	)
}
