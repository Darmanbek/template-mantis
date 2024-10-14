import { AuthProvider } from "src/providers"
import RootLayout from "./Layout"

export const Layout = () => (
	<AuthProvider>
		<RootLayout />
	</AuthProvider>
)
