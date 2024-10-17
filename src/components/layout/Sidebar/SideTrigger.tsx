import { RightOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Button } from "antd"
import { useResponsive } from "antd-style"
import Paragraph from "antd/es/typography/Paragraph"
import { type  FC } from "react"
import { UiMeta } from "src/components/ui"
import { useStylesSidebar } from "./useStylesSidebar"
import { ProfileData } from "src/data"
import { useThemeStore } from "src/store"

const SideTrigger: FC = () => {
	const { collapsed } = useThemeStore()
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
				<UiMeta
					avatar={
						<Avatar
							size={"large"}
							src={ProfileData.avatar}
							icon={<UserOutlined />}
							alt={"Icon"}
						/>
					}
					titleStrong={false}
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
