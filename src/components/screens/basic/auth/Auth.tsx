import { theme } from "antd"
import Layout, { Content, Footer, Header } from "antd/es/layout/layout"
import { CSSProperties, type  FC, type PropsWithChildren } from "react"
import { Logo } from "src/components/shared"
import styles from "./auth.module.scss"

const Auth: FC<PropsWithChildren> = ({ children }) => {
	
	const {
		token
	} = theme.useToken()
	
	return (
		<Layout className={styles.auth} style={{
			"--color-bg-container": token.colorBgContainer,
			"--border-radius": `${token.borderRadiusLG}px`
		} as CSSProperties}>
			<Header className={styles.header}>
				<Logo />
			</Header>
			<div className={styles["bg-logo"]}>
				<img src={"/antd.svg"} alt={"Logo"} />
			</div>
			<Content className={styles.container}>
				{children}
			</Content>
			<Footer className={styles.footer}>
				Ant Design ©{new Date().getFullYear()} Created by Karsoft
			</Footer>
		</Layout>
	)
}

export { Auth }
