import { RouterProvider } from "@tanstack/react-router"
import { type FC } from "react"
import { useAuth } from "src/shared/hooks"
import { routes } from "./routes.tsx"

const App: FC = () => {
	const auth = useAuth()

	return (
		<>
			<RouterProvider
				router={routes}
				context={{ auth }}
			/>
		</>
	)
}

export { App }
