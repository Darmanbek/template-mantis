import AntdLayout from "antd/es/layout"
import { type FC } from "react"
import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar/Sidebar"
import styles from "./layout.module.scss"

const Layout: FC = () => {
	return (
		<AntdLayout className={styles.layout}>
			<Sidebar />
			<Outlet />
		</AntdLayout>
	)
}

export default Layout
