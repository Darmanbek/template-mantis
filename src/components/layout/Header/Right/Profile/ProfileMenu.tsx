import {
	EditOutlined, LoadingOutlined, LogoutOutlined,
	ProfileOutlined,
	WalletOutlined
} from "@ant-design/icons"
import { Menu } from "antd"
import { type  FC } from "react"
import { ROUTES } from "src/config"
import { useAuthStore } from "src/store"

const ProfileMenu: FC = () => {
	const { loading, logout } = useAuthStore()
	
	return (
		<>
			<Menu
				items={[
					{
						key: ROUTES.APPS_PROFILE_ACCOUNT + "/basic",
						label: "Edit Profile",
						icon: <EditOutlined />
					},
					{
						key: ROUTES.APPS_PROFILE_ACCOUNT + "/personal",
						label: "Social Profile",
						icon: <ProfileOutlined />
					},
					{
						key: ROUTES.APPS_INVOICE_DETAILS_1,
						label: "Billing",
						icon: <WalletOutlined />
					},
					{
						key: ROUTES.LOGOUT,
						label: "Logout",
						icon: loading ? (
							<LoadingOutlined spin={true} />
						) : (
							<LogoutOutlined />
						),
						onClick: logout
					}
				]}
			/>
		</>
	)
}

export { ProfileMenu }
