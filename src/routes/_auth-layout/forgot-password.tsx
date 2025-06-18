import { createFileRoute } from "@tanstack/react-router"
import { ForgotPasswordPage } from "src/pages/auth/forgot-password"

export const Route = createFileRoute("/_auth-layout/forgot-password")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<ForgotPasswordPage />
		</>
	)
}
