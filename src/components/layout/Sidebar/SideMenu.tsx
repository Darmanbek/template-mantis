import { Button, Card, Empty, Flex, Menu, Typography } from "antd"
import { useResponsive } from "antd-style"
import { type  FC } from "react"
import { useNavigate } from "react-router-dom"
import { useStylesSidebar } from "./useStylesSidebar"
import { Logo } from "src/components/shared"
import { useMenuStore } from "src/store"
import { menu } from "./menu"

const SideMenu: FC = () => {
	const navigate = useNavigate()
	const { collapsed } = useMenuStore()
	const { md } = useResponsive()
	const { styles } = useStylesSidebar({
		collapsed: collapsed && !!md
	})
	
	const onSelectMenu = (key: string) => {
		navigate(key)
	}
	
	return (
		<>
			<div className={styles.logo}>
				<Logo noTitle={collapsed && md} />
			</div>
			<nav className={styles.menu}>
				<Menu
					items={menu.filter((item) => (collapsed && !!md) ? item?.type !== "group" : item)}
					onSelect={(item) => onSelectMenu(item.key)}
					mode={"inline"}
				/>
				<Card
					hidden={collapsed && !!md}
					className={styles.card}
					rootClassName={styles.root}
				>
					<Empty
						imageStyle={{ height: 60 }}
						description={
							<Flex vertical={true} align={"center"}>
								<Typography.Title level={5}>
									Help?
								</Typography.Title>
								<Typography.Text type={"secondary"}>
									Get to resolve query
								</Typography.Text>
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
