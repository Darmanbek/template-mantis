import { createFileRoute } from "@tanstack/react-router"
import { VerificationCodePage } from "src/pages/auth/verification-code"

export const Route = createFileRoute("/_auth-layout/verification-code")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<VerificationCodePage />
		</>
	)
}
