import { createStyles } from "antd-style"

export const useStylesContainer = createStyles(() => ({
	container: {
		maxWidth: 1440,
		width: "100%",
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		gap: 24,
		marginInline: "auto"
	}
}))
