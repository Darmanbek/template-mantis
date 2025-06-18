import type { FC, PropsWithChildren } from "react"
import { AntdProvider } from "src/app/providers/antd-provider.tsx"
import { AuthProvider } from "src/app/providers/auth-provider.tsx"

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<AntdProvider>
				<AuthProvider>{children}</AuthProvider>
			</AntdProvider>
		</>
	)
}

export { Providers }
