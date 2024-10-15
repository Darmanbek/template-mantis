import AntdLayout from "antd/es/layout"
import { Content } from "antd/es/layout/layout"
import { type FC } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import styles from "./layout.module.scss"

const Layout: FC = () => {
	return (
		<AntdLayout className={styles.layout}>
			<Sidebar />
			<Content>
				<Header />
				<Outlet />
			</Content>
		</AntdLayout>
	)
}

export default Layout
