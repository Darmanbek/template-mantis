import { createStyles } from "antd-style"

export const useStylesHeader = createStyles(({ token }) => ({
	header: {
		paddingLeft: 8,
		paddingRight: 8,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottom: `1px solid ${token.colorBorderSecondary}}`
		// 	padding-left: 8px;
		// 	padding-right: 8px;
		//
		// 	display: flex;
		// 	align-items: center;
		// 	justify-content: space-between;
	}
}))
