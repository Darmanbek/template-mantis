import {
	RightOutlined,
} from "@ant-design/icons"
import { Avatar, Button, Drawer } from "antd"
import Meta from "antd/es/card/Meta"
import Sider from "antd/es/layout/Sider"
import Paragraph from "antd/es/typography/Paragraph"
import { type  FC } from "react"
import { useResponsive } from "src/hooks"
import { useMenuStore } from "src/store"
import { SideMenu } from "./SideMenu"
import styles from "./sidebar.module.scss"

const Sidebar: FC = () => {
	const { isWide } = useResponsive(768)
	const { collapsed } = useMenuStore()
	
	if (isWide) return (
		<Drawer
			width={260}
			className={styles.drawer}
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
			trigger={(
				<Button
					type={"text"}
					block={true}
					style={{
						height: "100%",
						display: "flex",
						justifyContent: "space-between"
					}}
				>
					<Meta
						style={{
							display: "flex",
							gap: 8,
							textAlign: "start"
						}}
						avatar={
							<Avatar
								size={"large"}
								src={"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}
								alt={"Icon"}
							/>
						}
						title={"User"}
						description={<Paragraph type={"secondary"}>
							Frontend Developer
						</Paragraph>}
					/>
					<RightOutlined />
				</Button>
			)}
		>
			<SideMenu />
		</Sider>
	)
}

export { Sidebar }
