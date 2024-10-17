import AntdLayout from "antd/es/layout"
import { Content } from "antd/es/layout/layout"
import { type FC } from "react"
import { Outlet } from "react-router-dom"
import { useThemeStore } from "src/store"
import { Navbar } from "./Navbar/Navbar"
import { UiContainer } from "src/components/ui"
import { useStylesLayout } from "./useStylesLayout"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"

const Layout: FC = () => {
	const { styles } = useStylesLayout()
	const { orientation, width } = useThemeStore()
	
	return (
		<AntdLayout className={styles.layout}>
			{orientation === "vertical" &&
				<Sidebar />
			}
			<AntdLayout className={styles.layout}>
				<Header />
				{orientation === "horizontal" &&
					<Navbar />
				}
				<Content className={styles.main}>
					<UiContainer type={width}>
						<Outlet />
					</UiContainer>
				</Content>
			</AntdLayout>
		</AntdLayout>
	)
}

export default Layout
