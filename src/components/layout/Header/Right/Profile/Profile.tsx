import {
	LogoutOutlined,
	SettingOutlined,
	UserOutlined
} from "@ant-design/icons"
import { Avatar, Button, Flex, Popover, Tabs } from "antd"
import Meta from "antd/es/card/Meta"
import Paragraph from "antd/es/typography/Paragraph"
import { type  FC } from "react"
import { ProfileData } from "src/data"
import { useAuthStore } from "src/store"
import {
	ProfileMenu
} from "./ProfileMenu"
import {
	SettingsMenu
} from "./SettingsMenu"

const Profile: FC = () => {
	const { loading, logout } = useAuthStore()
	
	return (
		<Popover
			trigger={"click"}
			placement={"bottomRight"}
			overlayStyle={{
				width: 290
			}}
			content={(
				<>
					<Flex justify={"space-between"} align={"center"}>
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
							title={ProfileData.name}
							description={(
								<Paragraph type={"secondary"}>
									{ProfileData.role}
								</Paragraph>
							)}
						/>
						<Button
							type={"text"}
							size={"large"}
							loading={loading}
							icon={<LogoutOutlined />}
							onClick={logout}
						/>
					</Flex>
					<Tabs
						centered={true}
						items={[
							{
								key: "#Profile",
								label: "Profile",
								icon: <UserOutlined />,
								children: <ProfileMenu />
							},
							{
								key: "#Settings",
								label: "Settings",
								icon: <SettingOutlined />,
								children: <SettingsMenu />
							}
						]}
					/>
				</>
			)}
		>
			<Button
				type={"text"}
				size={"large"}
				style={{ height: "auto" }}
				icon={<Avatar
					src={ProfileData.avatar}
					icon={<UserOutlined />}
					alt={"Icon"}
				/>}
			>
				{ProfileData.name}
			</Button>
		</Popover>
	)
}

export { Profile }
