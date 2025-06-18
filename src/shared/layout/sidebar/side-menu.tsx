import { useNavigate } from "@tanstack/react-router"
import { Button, Card, Empty, Flex, Menu, Typography } from "antd"
import { useResponsive } from "antd-style"
import { type FC, useMemo } from "react"
import { useToken } from "src/shared/hooks"
import { useThemeStore } from "src/shared/store"
import { Logo } from "src/widgets/logo"
import { menu } from "./menu"

const SideMenu: FC = () => {
	const navigate = useNavigate()
	const { collapsed: col } = useThemeStore()
	const { md } = useResponsive()
	const { token } = useToken()
	const collapsed = useMemo(() => col && !!md, [col, md])

	const onSelectMenu = (key: string) => {
		navigate({
			to: key,
		})
	}

	return (
		<>
			<div
				style={{
					paddingTop: 8,
					paddingBottom: 8,
					paddingLeft: collapsed ? 0 : 24,
					minHeight: 64,
					display: "flex",
					alignItems: "center",
					justifyContent: collapsed ? "center" : "flex-start",
				}}
			>
				<Logo collapsed={collapsed && md} />
			</div>
			<nav
				style={{
					overflowY: "auto",
					overflowX: "hidden",
					scrollbarWidth: "thin",
					height: "calc(100% - 64px)",
				}}
			>
				<Menu
					items={menu.filter((item) => (collapsed && !!md ? item?.type !== "group" : item))}
					onSelect={(item) => onSelectMenu(item.key)}
					mode={"inline"}
				/>
				<Card
					hidden={collapsed && !!md}
					style={{
						margin: 24,
						backgroundColor: token.colorBgLayout,
					}}
				>
					<Empty
						styles={{
							image: {
								height: 60,
							},
						}}
						description={
							<Flex
								vertical={true}
								align={"center"}
							>
								<Typography.Title level={5}>Help?</Typography.Title>
								<Typography.Text type={"secondary"}>Get to resolve query</Typography.Text>
							</Flex>
						}
					>
						<Button type={"primary"}>Support</Button>
					</Empty>
				</Card>
			</nav>
		</>
	)
}

export { SideMenu }
