import { type ComponentProps, type FC } from "react"
import { EnumWidth } from "src/shared/store"

interface UiContainerProps extends ComponentProps<"div"> {
	type?: EnumWidth
}

const Container: FC<UiContainerProps> = ({ children, type = EnumWidth.CONTAINER, ...rest }) => {
	return (
		<div
			style={{
				maxWidth: type === "container" ? 1440 : "100%",
				width: "100%",
				flexGrow: 1,
				display: "flex",
				flexDirection: "column",
				gap: 24,
				marginInline: "auto",
			}}
			{...rest}
		>
			{children}
		</div>
	)
}

export { Container }
