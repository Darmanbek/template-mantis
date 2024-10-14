import { Drawer } from "antd"
import Sider from "antd/es/layout/Sider"
import { type  FC } from "react"
import { useResponsive } from "src/hooks"
import { SideMenu } from "./SideMenu"

const Sidebar: FC = () => {
	const { isWide } = useResponsive(768)
	console.log(isWide)
	
	if (isWide) return (
		<Drawer
			width={260}
		>
			<h1>Sidebar</h1>
		</Drawer>
	)
	
	return (
		<Sider
			width={260}
			collapsedWidth={60}
			theme={"light"}
		>
			<SideMenu />
		</Sider>
	)
}

export { Sidebar }
