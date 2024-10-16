import { createStyles } from "antd-style"

export const useStylesLayout = createStyles(() => ({
	layout: {
		height: "100vh"
	},
	main: {
		display: "flex",
		flexDirection: "column",
    gap: 24,
		overflowX: "hidden",
		overflowY: "auto",
		padding: 24
	}
}))
