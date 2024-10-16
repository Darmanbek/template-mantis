import { type ComponentProps, type  FC } from "react"
import {
	useStylesContainer
} from "./useStylesContainer"

const UiContainer: FC<ComponentProps<"div">> = ({
	children,
	className,
	...rest
}) => {
	const { styles, cx } = useStylesContainer()
	
	return (
		<div className={cx(styles.container, className)} {...rest}>
			{children}
		</div>
	)
}

export { UiContainer }
