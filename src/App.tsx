import { type FC } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "src/components/layout"
import { ForgotPassword, Login, Register } from "src/components/screens"
import { ROUTES } from "src/config/routes.config"

const App: FC = () => {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<Layout />} />
			<Route path={ROUTES.LOGIN} element={<Login />} />
			<Route path={ROUTES.REGISTER} element={<Register />} />
			<Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
		</Routes>
	)
}

export default App
