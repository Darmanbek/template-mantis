import { LogoutOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons"
import { useNavigate } from "@tanstack/react-router"
import { Avatar, Button, Flex, Popover, Tabs } from "antd"
import { type FC, useEffect } from "react"
import { ROUTES } from "src/shared/config"
import { ProfileData } from "src/shared/data"
import { useFetchResponse } from "src/shared/hooks"
import { useAuthStore } from "src/shared/store"
import { Meta } from "src/shared/ui"
import { ProfileMenu } from "./profile-menu.tsx"
import { SettingsMenu } from "./settings-menu.tsx"

const Profile: FC = () => {
	const navigate = useNavigate()
	const { clearToken } = useAuthStore()
	const { mutate: logout, isLoading, isSuccess } = useFetchResponse()

	useEffect(() => {
		if (isSuccess) {
			clearToken()
			navigate({
				to: ROUTES.PAGES_AUTHENTICATION_LOGIN,
				replace: true,
			})
		}
	}, [clearToken, isSuccess, navigate])
	return (
		<Popover
			trigger={"click"}
			placement={"bottomRight"}
			styles={{
				root: {
					width: 290,
				},
			}}
			content={
				<>
					<Flex
						justify={"space-between"}
						align={"center"}
					>
						<Meta
							titleStrong={false}
							avatar={
								<Avatar
									size={"large"}
									src={ProfileData.avatar}
									icon={<UserOutlined />}
									alt={"Icon"}
								/>
							}
							title={ProfileData.name}
							description={ProfileData.role}
						/>
						<Button
							type={"text"}
							size={"large"}
							loading={isLoading}
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
								children: <ProfileMenu />,
							},
							{
								key: "#Settings",
								label: "Settings",
								icon: <SettingOutlined />,
								children: <SettingsMenu />,
							},
						]}
					/>
				</>
			}
		>
			<Button
				type={"text"}
				size={"large"}
				style={{ height: 40, alignItems: "center" }}
			>
				<Avatar
					src={ProfileData.avatar}
					size={32}
					icon={<UserOutlined />}
					alt={"Icon"}
				/>
				{ProfileData.name}
			</Button>
		</Popover>
	)
}

export { Profile }
