import { type FC } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "src/components/layout"
import { ROUTES } from "src/config/routes.config"

const App: FC = () => {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<Layout />} />
			<Route path={ROUTES.LOGIN} element={<h1>Login</h1>} />
			<Route path={ROUTES.REGISTER} element={<h1>Register</h1>} />
		</Routes>
	)
}

export default App
