import { createStyles } from "antd-style"
import { EnumWidth } from "src/store"

interface StylesContainerProps {
	type: EnumWidth
}

export const useStylesContainer = createStyles((_v, { type }: StylesContainerProps) => ({
	container: {
		maxWidth: type === "container" ? 1440 : "100%",
		width: "100%",
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		gap: 24,
		marginInline: "auto"
	}
}))
