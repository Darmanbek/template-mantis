import { createFileRoute } from "@tanstack/react-router"
import { ResetPasswordPage } from "src/pages/auth/reset-password"

export const Route = createFileRoute("/_auth-layout/reset-password")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<ResetPasswordPage />
		</>
	)
}
