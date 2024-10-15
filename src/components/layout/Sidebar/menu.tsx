import {
	ApartmentOutlined,
	DashboardOutlined, DatabaseOutlined,
	IdcardOutlined
} from "@ant-design/icons"
import { type ItemType } from "antd/es/menu/interface"
import { antdUrl } from "src/config"
import { ROUTES } from "src/config/routes.config"

export const menu: ItemType[] = [
	{
		key: ROUTES.DASHBOARD_GROUP,
		label: "Dashboard",
		type: "group"
	},
	{
		key: ROUTES.DASHBOARD,
		icon: <DashboardOutlined />,
		label: "Dashboard",
		children: [
			{
				key: ROUTES.DASHBOARD_DEFAULT,
				label: "Default"
			},
			{
				key: ROUTES.DASHBOARD_ANALYTICS,
				label: "Analytics"
			},
			{
				key: ROUTES.DASHBOARD_INVOICE,
				label: "Invoice"
			}
		]
	},
	{
		key: ROUTES.COMPONENTS,
		icon: <ApartmentOutlined />,
		label: "Components",
		onClick: () => {
			window.open(antdUrl, "_blank")
		}
	},
	{
		key: ROUTES.WIDGETS_GROUP,
		label: "Widgets",
		type: "group"
	},
	{
		key: ROUTES.WIDGETS_STATISTICS,
		icon: <IdcardOutlined />,
		label: "Statistics"
	},
	{
		key: ROUTES.WIDGETS_DATA,
		icon: <IdcardOutlined />,
		label: "Statistics"
	},
	{
		key: ROUTES.WIDGETS_CHART,
		icon: <DatabaseOutlined />,
		label: "Data"
	},
	{
		key: ROUTES.APPS_GROUP,
		label: "Applications",
		type: "group"
	},
]
