import { createStyles } from "antd-style"

interface StylesSidebarProps {
	collapsed: boolean;
}

export const useStylesSidebar = createStyles(({ token,css }, { collapsed }: StylesSidebarProps) => {
	return {
		sider: css`
			overflow-x: hidden;
			background-color: ${token.colorBgContainer};
			border-right: 1px solid ${token.colorBorderSecondary};

			.ant-layout-sider-trigger
			{
				border-right: 1px solid ${token.colorBorderSecondary};
				border-top: 1px solid ${token.colorBorderSecondary};
				padding: 4px;
			}
		`,
		drawer: {},
		menu: {
			overflowY: "auto",
			overflowX: "hidden",
			height: "calc(100% - 64px)",
		},
		logo: {
			paddingTop: 8,
			paddingBottom: 8,
			paddingLeft: collapsed ? 0 : 24,
			minHeight: 64,
			display: "flex",
			alignItems: "center",
			justifyContent: collapsed ? "center" : "flex-start",
		},
		trigger: collapsed ? {
			height: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			padding: 0,
		} : {
			height: "100%",
			display: "flex",
			justifyContent: "space-between",
		},
		card: {
			margin: 24,
		},
		root: {
			backgroundColor: token.colorBgLayout,
			
		}
	}
})
