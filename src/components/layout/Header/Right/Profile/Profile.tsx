import {
	LogoutOutlined,
	SettingOutlined,
	UserOutlined
} from "@ant-design/icons"
import { Avatar, Button, Flex, Popover, Tabs } from "antd"
import { type  FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UiMeta } from "src/components/ui"
import { ROUTES } from "src/config"
import { ProfileData } from "src/data"
import { useFetchResponse } from "src/hooks"
import { useAuthStore } from "src/store"
import {
	ProfileMenu
} from "./ProfileMenu"
import {
	SettingsMenu
} from "./SettingsMenu"

const Profile: FC = () => {
	const navigate = useNavigate()
	const { clearToken } = useAuthStore()
	const {
		mutate: logout,
		isLoading,
		isSuccess
	} = useFetchResponse()
	
	useEffect(() => {
		if (isSuccess) {
			clearToken()
			navigate(ROUTES.PAGES_AUTHENTICATION_LOGIN, { replace: true })
		}
	}, [clearToken, isSuccess, navigate])
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
						<UiMeta
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
