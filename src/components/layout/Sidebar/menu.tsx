import { DashboardOutlined } from "@ant-design/icons"
import { type ItemType } from "antd/es/menu/interface"
import { ROUTES } from "src/config/routes.config"

export const menu: ItemType[] = [
	{
		key: ROUTES.DASHBOARD,
		icon: <DashboardOutlined />,
		label: "Dashboard",
		children: [
			{
				key: ROUTES.DASHBOARD_DEFAULT,
				label: "Default",
			},
			{
				key: ROUTES.DASHBOARD_ANALYTICS,
				label: "Analytics",
			},
			{
				key: ROUTES.DASHBOARD_INVOICE,
				label: "Invoice",
			}
		]
	}
]
