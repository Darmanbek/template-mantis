import { type  FC } from "react"
import { Header as AntdHeader } from "antd/es/layout/layout"
import { useThemeStore } from "src/store"
import { useStylesHeader } from "./useStylesHeader"
import { HeaderLeft } from "./Left/HeaderLeft"
import { HeaderRight } from "./Right/HeaderRight"

const Header: FC = () => {
	const { orientation } = useThemeStore()
	const { styles } = useStylesHeader({
		orientation
	})
	
	return (
		<AntdHeader className={styles.header}>
			<HeaderLeft />
			<HeaderRight />
		</AntdHeader>
	)
}

export { Header }
