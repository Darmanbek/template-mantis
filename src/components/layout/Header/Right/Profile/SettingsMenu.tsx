import {
	CommentOutlined,
	LockOutlined,
	QuestionCircleOutlined, UnorderedListOutlined, UserOutlined
} from "@ant-design/icons"
import { Menu } from "antd"
import { type  FC } from "react"

const SettingsMenu: FC = () => {
	return (
		<>
			<Menu
				items={[
					{
						key: "#Support",
						label: "Support",
						icon: <QuestionCircleOutlined />
					},
					{
						key: "#AccountSettings",
						label: "Account Settings",
						icon: <UserOutlined />
					},
					{
						key: "#PrivacyCenter",
						label: "Privacy Center",
						icon: <LockOutlined />
					},
					{
						key: "#Feedback",
						label: "Feedback",
						icon: <CommentOutlined />
					},
					{
						key: "#History",
						label: "History",
						icon: <UnorderedListOutlined />
					}
				]}
			/>
		</>
	)
}

export { SettingsMenu }
