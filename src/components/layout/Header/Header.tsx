import { type  FC } from "react"
import { Header as AntdHeader } from "antd/es/layout/layout"
import { useStylesHeader } from "./useStylesHeader"
import { HeaderLeft } from "./Left/HeaderLeft"
import { HeaderRight } from "./Right/HeaderRight"

const Header: FC = () => {
	const { styles } = useStylesHeader()
	
	return (
		<AntdHeader className={styles.header}>
			<HeaderLeft />
			<HeaderRight />
		</AntdHeader>
	)
}

export { Header }
