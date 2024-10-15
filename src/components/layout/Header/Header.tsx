import { type  FC } from "react"
import { Header as AntdHeader } from "antd/es/layout/layout"
import { HeaderLeft } from "./Left/HeaderLeft"
import { HeaderRight } from "./Right/HeaderRight"
import styles from "./header.module.scss"

const Header: FC = () => {
	return (
		<AntdHeader className={styles.header}>
			<HeaderLeft />
			<HeaderRight />
		</AntdHeader>
	)
}

export { Header }
