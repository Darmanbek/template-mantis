import { useResponsive } from "antd-style"
import Drawer from "antd/es/drawer"
import Sider from "antd/es/layout/Sider"
import { type FC } from "react"
import { useThemeStore } from "src/shared/store"
import { SideMenu } from "./side-menu.tsx"
import { SideTrigger } from "./side-trigger.tsx"
import { useStylesSidebar } from "./use-styles-sidebar.ts"

const Sidebar: FC = () => {
	const { md } = useResponsive()
	const { direction, collapsed, toggleCollapsed } = useThemeStore()
	const { styles } = useStylesSidebar({
		collapsed,
	})

	if (!md)
		return (
			<Drawer
				width={260}
				placement={direction === "rtl" ? "right" : "left"}
				closable={false}
				onClose={toggleCollapsed}
				open={collapsed}
				styles={{
					body: {
						padding: 0,
					},
					footer: {
						padding: 4,
					},
				}}
				footer={<SideTrigger />}
			>
				<SideMenu />
			</Drawer>
		)

	return (
		<Sider
			width={260}
			collapsedWidth={60}
			collapsed={collapsed}
			theme={"light"}
			className={styles.sider}
			collapsible={true}
			trigger={<SideTrigger />}
		>
			<SideMenu />
		</Sider>
	)
}

export { Sidebar }
