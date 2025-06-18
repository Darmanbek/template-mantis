import { createFileRoute, Outlet } from "@tanstack/react-router"
import Layout from "antd/es/layout"
import { Header, Navbar, Sidebar } from "src/shared/layout"
import { useThemeStore } from "src/shared/store"
import { Container, LayoutContent } from "src/shared/ui"

export const Route = createFileRoute("/_layout")({
	component: RouteComponent,
})

function RouteComponent() {
	const { orientation, width } = useThemeStore()

	return (
		<>
			<Layout
				style={{
					height: "100vh",
				}}
				hasSider={orientation === "vertical"}
			>
				{orientation === "vertical" && <Sidebar />}
				<Layout>
					<Header />
					{orientation === "horizontal" && <Navbar />}
					<LayoutContent
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 24,
							overflowX: "hidden",
							overflowY: "auto",
							padding: 24,
						}}
					>
						<Container type={width}>
							<Outlet />
						</Container>
					</LayoutContent>
				</Layout>
			</Layout>
		</>
	)
}
