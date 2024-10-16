import { App, ConfigProvider, theme } from "antd"
import { type  FC, PropsWithChildren, useState } from "react"

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isDark] = useState(false)
	const token = theme.getDesignToken({
		token: isDark ? {
			colorBgLayout: "rgb(18, 18, 18)",
			colorBgContainer: "rgb(30, 30, 30)",
		} : {},
		algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
	})

	return (
		<ConfigProvider
			theme={{
				algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
				token,
				components: {
					Layout: {
						headerBg: token.colorBgContainer,
						// headerHeight: "auto"
						triggerHeight: 76
					},
					Menu: {
						subMenuItemBg: "transparent"
					}
				},
			}}
			typography={{
				style: {
					margin: 0
				}
			}}
			menu={{
				style: {
					borderRight: 0
				}
			}}
		>
			<App>
				{children}
			</App>
		</ConfigProvider>
	)
}

export { AntdProvider }
