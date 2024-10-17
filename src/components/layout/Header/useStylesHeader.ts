import { createStyles } from "antd-style"

interface StylesHeaderProps {
	orientation: "vertical" | "horizontal"
}

export const useStylesHeader = createStyles(({ token }, { orientation }: StylesHeaderProps) => ({
	header: {
		paddingLeft: orientation === "horizontal" ? 24 : 8,
		paddingRight: orientation === "horizontal" ? 24 : 8,
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
