import AntdLayout from "antd/es/layout"
import { Content } from "antd/es/layout/layout"
import { type FC } from "react"
import { Outlet } from "react-router-dom"
import { UiContainer } from "src/components/ui"
import { useStylesLayout } from "./useStylesLayout"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"

const Layout: FC = () => {
	const { styles } = useStylesLayout()
	return (
		<AntdLayout className={styles.layout}>
			<Sidebar />
			<AntdLayout className={styles.layout}>
				<Header />
				<Content className={styles.main}>
					<UiContainer>
						<Outlet />
					</UiContainer>
				</Content>
			</AntdLayout>
		</AntdLayout>
	)
}

export default Layout
