import { createStyles } from "antd-style"

export const useStylesSidebar = createStyles(({ token, css }) => {
	return {
		sider: css`
			overflow-x: hidden;
			background-color: ${token.colorBgContainer};
			border-right: 1px solid ${token.colorBorderSecondary};

			.ant-layout-sider-trigger {
				border-right: 1px solid ${token.colorBorderSecondary};
				border-top: 1px solid ${token.colorBorderSecondary};
				padding: 4px;
			}
		`,
	}
})
