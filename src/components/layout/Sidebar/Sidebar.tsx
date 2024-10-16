import { Drawer } from "antd"
import { useResponsive } from "antd-style"
import Sider from "antd/es/layout/Sider"
import { type  FC } from "react"
import { useMenuStore } from "src/store"
import { SideTrigger } from "./SideTrigger"
import { useStylesSidebar } from "./useStylesSidebar"
import { SideMenu } from "./SideMenu"
// import styles from "./sidebar.module.scss"

const Sidebar: FC = () => {
	const { md } = useResponsive()
	const { collapsed, toggleCollapsed } = useMenuStore()
	const { styles } = useStylesSidebar({
		collapsed
	})
	
	if (!md) return (
		<Drawer
			width={260}
			placement={"left"}
			closable={false}
			onClose={toggleCollapsed}
			open={collapsed}
			styles={{
				body: {
					padding: 0
				},
				footer: {
					padding: 4
				}
			}}
			className={styles.drawer}
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
