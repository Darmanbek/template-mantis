import { App, ConfigProvider } from "antd"
import { type  FC, PropsWithChildren } from "react"

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ConfigProvider>
			<App>
				{children}
			</App>
		</ConfigProvider>
	)
}

export { AntdProvider }
