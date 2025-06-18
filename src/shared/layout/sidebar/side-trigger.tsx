import { RightOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Button } from "antd"
import { useResponsive } from "antd-style"
import Paragraph from "antd/es/typography/Paragraph"
import { type FC } from "react"
import { ProfileData } from "src/shared/data"
import { useThemeStore } from "src/shared/store"
import { Meta } from "src/shared/ui"

const SideTrigger: FC = () => {
	const { collapsed } = useThemeStore()
	const { md } = useResponsive()
	return (
		<>
			<Button
				type={"text"}
				block={true}
				style={{
					height: "100%",
					display: "flex",
					justifyContent: collapsed ? "center" : "space-between",
					alignItems: "center",
					padding: collapsed ? 0 : undefined,
				}}
			>
				<Meta
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
					description={
						!(collapsed && md) && <Paragraph type={"secondary"}>{ProfileData.role}</Paragraph>
					}
				/>
				{!(collapsed && md) && <RightOutlined />}
			</Button>
		</>
	)
}

export { SideTrigger }
