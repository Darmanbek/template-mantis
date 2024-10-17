import { createStyles } from "antd-style"

export const useStylesRadioTag = createStyles(() => ({
	radio: {
		width: "100%",
		height: "auto",
		border: "none !important",
		borderColor: "transparent",
		padding: 0
	},
	tag: {
		padding: 8,
		height: "inherit",
		width: "inherit",
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		alignItems: "center",
		margin: 0
	}
}))
