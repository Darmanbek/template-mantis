import { App, ConfigProvider, theme } from "antd"
import { type  FC, type PropsWithChildren } from "react"
import { useThemeStore } from "src/store"

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	const { direction, isDark, color, fontFamily } = useThemeStore()
	const { token: rootToken } = theme.useToken()
	const token = theme.getDesignToken({
		token: isDark ? {
			colorPrimary: color,
			colorBgLayout: "rgb(18, 18, 18)",
			colorBgContainer: "rgb(30, 30, 30)",
			fontFamily: fontFamily === "default" ? rootToken.fontFamily : `${fontFamily},${rootToken.fontFamily}`
		} : {
			colorPrimary: color,
			fontFamily: fontFamily === "default" ? rootToken.fontFamily : `${fontFamily},${rootToken.fontFamily}`
		},
		algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
	})
	
	return (
		<ConfigProvider
			direction={direction}
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
				}
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
