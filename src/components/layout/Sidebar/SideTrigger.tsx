import { RightOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Button } from "antd"
import { useResponsive } from "antd-style"
import Meta from "antd/es/card/Meta"
import Paragraph from "antd/es/typography/Paragraph"
import { type  FC } from "react"
import { useStylesSidebar } from "./useStylesSidebar"
import { ProfileData } from "src/data"
import { useMenuStore } from "src/store"

const SideTrigger: FC = () => {
	const { collapsed } = useMenuStore()
	const { md } = useResponsive()
	const { styles } = useStylesSidebar({
		collapsed: collapsed && !!md
	})
	return (
		<>
			<Button
				type={"text"}
				block={true}
				className={styles.trigger}
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
							src={ProfileData.avatar}
							icon={<UserOutlined />}
							alt={"Icon"}
						/>
					}
					title={!(collapsed && md) && ProfileData.name}
					description={!(collapsed && md) && <Paragraph type={"secondary"}>
						{ProfileData.role}
					</Paragraph>}
				/>
				{!(collapsed && md) && <RightOutlined />}
			</Button>
		</>
	)
}

export { SideTrigger }
