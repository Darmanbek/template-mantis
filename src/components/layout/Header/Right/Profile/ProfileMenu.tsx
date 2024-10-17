import {
	EditOutlined, LoadingOutlined, LogoutOutlined,
	ProfileOutlined,
	WalletOutlined
} from "@ant-design/icons"
import { Menu } from "antd"
import { type  FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "src/config"
import { useFetchResponse } from "src/hooks"
import { useAuthStore } from "src/store"

const ProfileMenu: FC = () => {
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
						key: ROUTES.PAGES_AUTHENTICATION_LOGIN,
						label: "Logout",
						icon: isLoading ? (
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
