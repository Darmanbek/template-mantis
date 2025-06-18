import { createFileRoute } from "@tanstack/react-router"
import { CheckMailPage } from "src/pages/auth/check-mail"

export const Route = createFileRoute("/_auth-layout/check-mail")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<CheckMailPage />
		</>
	)
}
