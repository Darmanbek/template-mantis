import {
	ApartmentOutlined, BorderOutlined, BoxPlotOutlined,
	BuildOutlined,
	CalendarOutlined,
	ChromeOutlined,
	CloudUploadOutlined,
	CustomerServiceOutlined,
	DashboardOutlined,
	DatabaseOutlined, DeploymentUnitOutlined,
	DollarOutlined,
	EnvironmentOutlined,
	FileDoneOutlined,
	FileTextOutlined,
	FormOutlined,
	IdcardOutlined,
	LoginOutlined,
	MenuUnfoldOutlined,
	MessageOutlined,
	PhoneOutlined,
	PieChartOutlined,
	PlusOutlined, QuestionOutlined,
	RocketOutlined,
	ShoppingCartOutlined,
	StepForwardOutlined,
	StopOutlined,
	UserOutlined
} from "@ant-design/icons"
import { Button, Tag } from "antd"
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
	{
		key: ROUTES.APPS_CHAT,
		icon: <MessageOutlined />,
		label: "Chat"
	},
	{
		key: ROUTES.APPS_CALENDAR,
		icon: <CalendarOutlined />,
		label: "Calendar"
	},
	{
		key: ROUTES.APPS_KANBAN,
		icon: <BuildOutlined />,
		label: "Kanban"
	},
	{
		key: ROUTES.APPS_CUSTOMER,
		icon: <CustomerServiceOutlined />,
		label: "Customer",
		children: [
			{
				key: ROUTES.APPS_CUSTOMER_LIST,
				label: "List",
				extra: <Button
					size={"small"}
					style={{
						fontSize: "inherit",
						height: 20,
						width: 20,
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}
					icon={<PlusOutlined style={{ fontSize: "inherit" }} />}
				/>
			},
			{
				key: ROUTES.APPS_CUSTOMER_CARD,
				label: "Cards"
			}
		]
	},
	{
		key: ROUTES.APPS_INVOICE,
		icon: <FileTextOutlined />,
		label: "Invoice",
		// expandIcon: ({ isOpen, disabled }) => (
		// 	<Button
		// 		size={"small"}
		// 		style={{
		// 			fontSize: 10,
		// 			height: 20,
		// 			width: 20,
		// 			display: "flex",
		// 			alignItems: "center",
		// 			justifyContent: "center",
		// 			transform: "translateX(100%)"
		// 		}}
		// 		styles={{
		// 			icon: {
		// 				display: "flex",
		// 				alignItems: "center",
		// 				justifyContent: "center",
		// 				textAlign: "center"
		// 			}
		// 		}}
		// 		disabled={disabled}
		// 		icon={isOpen ?
		// 			<UpOutlined style={{ fontSize: "inherit", marginInline: "auto" }} /> :
		// 			<DownOutlined
		// 				style={{ fontSize: "inherit", marginInline: "auto" }} />}
		// 	/>
		// ),
		children: [
			{
				key: ROUTES.APPS_INVOICE_CREATE,
				label: "Create"
			},
			{
				key: ROUTES.APPS_INVOICE_DETAILS_1,
				label: "Details"
			},
			{
				key: ROUTES.APPS_INVOICE_LIST,
				label: "List"
			},
			{
				key: ROUTES.APPS_INVOICE_EDIT_1,
				label: "Edit"
			}
		]
	},
	{
		key: ROUTES.APPS_PROFILE,
		icon: <UserOutlined />,
		label: "Profile",
		children: [
			{
				key: ROUTES.APPS_PROFILE_USER,
				label: "User Profile"
			},
			{
				key: ROUTES.APPS_PROFILE_ACCOUNT,
				label: "Account Profile"
			}
		]
	},
	{
		key: ROUTES.APPS_E_COMMERCE,
		icon: <ShoppingCartOutlined />,
		label: "E-commerce",
		children: [
			{
				key: ROUTES.APPS_E_COMMERCE_PRODUCTS,
				label: "Products"
			},
			{
				key: ROUTES.APPS_E_COMMERCE_PRODUCT_DETAIL_1,
				label: "Product Details"
			},
			{
				key: ROUTES.APPS_E_COMMERCE_PRODUCT_LIST,
				label: "Product List"
			},
			{
				key: ROUTES.APPS_E_COMMERCE_ADD_NEW_PRODUCT,
				label: "Add New Product"
			},
			{
				key: ROUTES.APPS_E_COMMERCE_CHECKOUT,
				label: "Checkout"
			}
		]
	},
	{
		key: ROUTES.FORMS_AND_TABLES_GROUP,
		label: "Forms & Tables",
		type: "group"
	},
	{
		key: ROUTES.FORMS_AND_TABLES_VALIDATION,
		icon: <FileDoneOutlined />,
		label: "Forms Validation"
	},
	{
		key: ROUTES.FORMS_AND_TABLES_WIZARD,
		icon: <StepForwardOutlined />,
		label: "Forms Validation"
	},
	{
		key: ROUTES.FORMS_AND_TABLES_LAYOUT,
		icon: <FormOutlined />,
		label: "Layout",
		children: [
			{
				key: ROUTES.FORMS_AND_TABLES_LAYOUT_BASIC,
				label: "Basic"
			},
			{
				key: ROUTES.FORMS_AND_TABLES_LAYOUT_MULTI_COLUMN,
				label: "Multi Column"
			},
			{
				key: ROUTES.FORMS_AND_TABLES_LAYOUT_ACTION_BAR,
				label: "Action Bar"
			},
			{
				key: ROUTES.FORMS_AND_TABLES_LAYOUT_STICKY_BAR,
				label: "Sticky Bar"
			}
		]
	},
	{
		key: ROUTES.FORMS_AND_TABLES_PLUGINS,
		icon: <CloudUploadOutlined />,
		label: "Plugins",
		children: [
			{
				key: ROUTES.FORMS_AND_TABLES_PLUGINS_MASK,
				label: "Mask"
			},
			{
				key: ROUTES.FORMS_AND_TABLES_PLUGINS_CLIPBOARD,
				label: "Clipboard"
			},
			{
				key: ROUTES.FORMS_AND_TABLES_PLUGINS_RE_CAPTCHA,
				label: "reCaptcha"
			},
			{
				key: ROUTES.FORMS_AND_TABLES_PLUGINS_EDITOR,
				label: "Editor"
			},
			{
				key: ROUTES.FORMS_AND_TABLES_PLUGINS_DROPZONE,
				label: "Dropzone"
			}
		]
	},
	{
		key: ROUTES.CHARTS_AND_MAP_GROUP,
		label: "Charts & Map",
		type: "group"
	},
	{
		key: ROUTES.CHARTS_AND_MAP_CHARTS,
		icon: <PieChartOutlined />,
		label: "Charts",
		children: [
			{
				key: ROUTES.CHARTS_AND_MAP_CHARTS_ECHARTS,
				label: "ECharts"
			},
			{
				key: ROUTES.CHARTS_AND_MAP_CHARTS_ORGANIZATION_CHART,
				label: "Organization Chart"
			}
		]
	},
	{
		key: ROUTES.CHARTS_AND_MAP_MAP,
		icon: <EnvironmentOutlined />,
		label: "Map"
	},
	{
		key: `${ROUTES.CHARTS_AND_MAP_GROUP}/${ROUTES.SAMPLE_PAGE}`,
		type: "divider"
	},
	{
		key: ROUTES.SAMPLE_PAGE,
		icon: <ChromeOutlined />,
		label: "Sample Page"
	},
	{
		key: ROUTES.PAGES_GROUP,
		label: "Pages",
		type: "group"
	},
	{
		key: ROUTES.PAGES_AUTHENTICATION,
		icon: <LoginOutlined />,
		label: "Authentication",
		children: [
			{
				key: ROUTES.PAGES_AUTHENTICATION_LOGIN,
				label: "Login"
			},
			{
				key: ROUTES.PAGES_AUTHENTICATION_REGISTER,
				label: "Register"
			},
			{
				key: ROUTES.PAGES_AUTHENTICATION_FORGOT_PASSWORD,
				label: "Forgot Password"
			},
			{
				key: ROUTES.PAGES_AUTHENTICATION_RESET_PASSWORD,
				label: "Reset Password"
			},
			{
				key: ROUTES.PAGES_AUTHENTICATION_CHECK_MAIL,
				label: "Check Mail"
			},
			{
				key: ROUTES.PAGES_AUTHENTICATION_CODE_VERIFICATION,
				label: "Code Verification"
			}
		]
	},
	{
		key: ROUTES.PAGES_MAINTENANCE,
		icon: <RocketOutlined />,
		label: "Maintenance",
		children: [
			{
				key: ROUTES.PAGES_MAINTENANCE_404,
				label: "Error 404"
			},
			{
				key: ROUTES.PAGES_MAINTENANCE_500,
				label: "Error 500"
			},
			{
				key: ROUTES.PAGES_MAINTENANCE_COMING_SOON,
				label: "Coming Soon"
			},
			{
				key: ROUTES.PAGES_MAINTENANCE_UNDER_CONSTRUCTION,
				label: "Under Construction"
			}
		]
	},
	{
		key: ROUTES.PAGES_CONTACT_US,
		icon: <PhoneOutlined />,
		label: "Contact US"
	},
	{
		key: ROUTES.PAGES_PRICING,
		icon: <DollarOutlined />,
		label: "Pricing"
	},
	{
		key: `${ROUTES.PAGES_GROUP}/${ROUTES.MENU_LEVELS}`,
		type: "divider"
	},
	{
		key: ROUTES.MENU_LEVELS,
		icon: <MenuUnfoldOutlined />,
		label: "Menu Levels",
		children: [
			{
				key: ROUTES.MENU_LEVELS_LEVEL1 + "-1",
				label: "Level 1"
			},
			{
				key: ROUTES.MENU_LEVELS_LEVEL1 + "-2",
				label: "Level 1",
				children: [
					{
						key: ROUTES.MENU_LEVELS_LEVEL2 + "-1",
						label: "Level 2"
					},
					{
						key: ROUTES.MENU_LEVELS_LEVEL2 + "-2",
						label: "Level 2",
						children: [
							{
								key: ROUTES.MENU_LEVELS_LEVEL3 + "-1",
								label: "Level 3"
							},
							{
								key: ROUTES.MENU_LEVELS_LEVEL3 + "-2",
								label: "Level 3"
							}
						]
					}
				]
			}
		]
	},
	{
		key: ROUTES.SUB_CAPTION_LEVELS,
		icon: <BoxPlotOutlined />,
		label: "Sub Caption Levels",
		title: "Caption Collapse",
		children: [
			{
				key: ROUTES.SUB_CAPTION_LEVELS_LEVEL1 + "-1",
				label: "Level 1"
			},
			{
				key: ROUTES.SUB_CAPTION_LEVELS_LEVEL1 + "-2",
				label: "Level 1",
				children: [
					{
						key: ROUTES.SUB_CAPTION_LEVELS_LEVEL2 + "-1",
						label: "Level 2"
					},
					{
						key: ROUTES.SUB_CAPTION_LEVELS_LEVEL2 + "-2",
						label: "Level 2"
					}
				]
			}
		]
	},
	{
		key: ROUTES.DISABLED_MENU,
		icon: <StopOutlined />,
		label: "Disabled Menu"
	},
	{
		key: ROUTES.OVAL_CHIP,
		icon: <BorderOutlined />,
		label: "Oval Chip"
	},
	{
		key: ROUTES.DOCUMENTATION,
		icon: <QuestionOutlined />,
		label: "Documentation",
		extra: <Tag>Antd</Tag>
	},
	{
		key: ROUTES.ROADMAP,
		icon: <DeploymentUnitOutlined />,
		label: "Roadmap"
	},
]
