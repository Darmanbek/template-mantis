import { RouterProvider } from "@tanstack/react-router"
import { type FC } from "react"
import { routes } from "./routes.tsx"

const App: FC = () => {
	return (
		<>
			<RouterProvider router={routes} />
		</>
	)
}

export { App }
