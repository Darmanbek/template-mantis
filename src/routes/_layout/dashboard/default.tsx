import { createFileRoute } from "@tanstack/react-router"
import { DefaultPage } from "src/pages/dashboard/default"
import { PageHeader } from "src/shared/ui"

export const Route = createFileRoute("/_layout/dashboard/default")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<PageHeader
				ghost={false}
				title={"Dashboard"}
			/>
			<DefaultPage />
		</>
	)
}
