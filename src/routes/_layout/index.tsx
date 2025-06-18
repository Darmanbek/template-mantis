import { createFileRoute } from "@tanstack/react-router"
import { PageHeader } from "src/shared/ui"

export const Route = createFileRoute("/_layout/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<PageHeader
				ghost={false}
				onBack={() => null}
				title={"Title"}
			/>
		</>
	)
}
