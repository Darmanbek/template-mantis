import AntdLayout from "antd/es/layout"
import { type FC } from "react"
import { Sidebar } from "./Sidebar/Sidebar"
import styles from "./layout.module.scss"

const Layout: FC = () => {
	return (
		<AntdLayout className={styles.layout}>
			<Sidebar />
		</AntdLayout>
	)
}

export default Layout
