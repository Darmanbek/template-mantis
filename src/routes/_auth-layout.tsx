import { createFileRoute, Outlet } from "@tanstack/react-router"
import { Card, ConfigProvider } from "antd"
import Layout, { Content, Footer, Header } from "antd/es/layout/layout"
import { Logo } from "src/widgets/logo"

export const Route = createFileRoute("/_auth-layout")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<ConfigProvider>
				<Layout
					style={{
						position: "relative",
						minHeight: "100vh",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Header
						style={{
							padding: "24px 24px 0 24px",
							height: "auto",
							lineHeight: 1,
							backgroundColor: "transparent",
						}}
					>
						<Logo />
					</Header>
					<div
						style={{
							position: "absolute",
							filter: "blur(18px)",
							zIndex: 1,
							bottom: 0,
							left: 0,
							transform: "translateX(-50%)",
						}}
					>
						<img
							src={"/antd.svg"}
							style={{
								height: "75vh",
							}}
							alt={"Logo"}
						/>
					</div>
					<Content
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Card
							style={{
								zIndex: 10,
								padding: 20,
								margin: 24,
								maxWidth: 475,
								width: "100%",
							}}
						>
							<Outlet />
						</Card>
					</Content>
					<Footer
						style={{
							textAlign: "center",
							padding: "24px 0 24px 24px",
						}}
					>
						Ant Design ©{new Date().getFullYear()} Created by Darmanbek
					</Footer>
				</Layout>
			</ConfigProvider>
		</>
	)
}
