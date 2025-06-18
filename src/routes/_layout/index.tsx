import { createFileRoute } from "@tanstack/react-router"
import { Button } from "antd"
import { PageHeader } from "src/shared/ui"

export const Route = createFileRoute("/_layout/")({
	component: RouteComponent,
})
const routes = [
	{
		title: "First-level Menu",
	},
	{
		title: "Second-level Menu",
	},
	{
		title: "Third-level Menu",
	},
]

const tags = [
	{
		color: "blue" as const,
		label: "process",
	},
	{
		color: "red" as const,
		label: "red",
	},
	{
		color: "green" as const,
		label: "green",
	},
]

function RouteComponent() {
	return (
		<>
			<PageHeader
				ghost={false}
				onBack={() => null}
				title={"Title"}
				subTitle={"This is a subtitle"}
				tags={tags}
				extra={[
					<Button key={"3"}>Operation</Button>,
					<Button key={"2"}>Operation</Button>,
					<Button
						key={"1"}
						type={"primary"}
					>
						Primary
					</Button>,
				]}
				breadcrumb={{ items: routes }}
			/>
		</>
	)
}
