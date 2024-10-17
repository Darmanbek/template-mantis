import { type ComponentProps, type  FC } from "react"
import { EnumWidth } from "src/store"
import {
	useStylesContainer
} from "./useStylesContainer"

interface UiContainerProps extends ComponentProps<"div"> {
	type?: EnumWidth
}

const UiContainer: FC<UiContainerProps> = ({
	children,
	className,
	type = EnumWidth.CONTAINER,
	...rest
}) => {
	const { styles, cx } = useStylesContainer({ type })
	
	return (
		<div className={cx(styles.container, className)} {...rest}>
			{children}
		</div>
	)
}

export { UiContainer }
