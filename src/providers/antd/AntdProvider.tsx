import { App, ConfigProvider, theme } from "antd"
import { type  FC, PropsWithChildren } from "react"

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	const token = theme.getDesignToken({
		algorithm: theme.darkAlgorithm
	})
	return (
		<ConfigProvider
			theme={{
				algorithm: theme.darkAlgorithm,
				token: {
					colorBgLayout: "rgb(18, 18, 18)",
					colorBgContainer: "rgb(30, 30, 30)",
				},
				components: {
					Layout: {
						headerBg: token.colorBgContainer,
						// headerHeight: "auto"
					}
				},
			}}
			typography={{
				style: {
					margin: 0
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
