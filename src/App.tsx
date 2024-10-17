import { type FC } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "src/components/layout"
import {
	CheckMail,
	ForgotPassword,
	Login,
	Register, ResetPassword,
	VerificationCode
} from "src/components/screens"
import { ROUTES } from "src/config/routes.config"
import { routes } from "src/routes"

const App: FC = () => {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<Layout />}>
				{routes.map((route, index) => (
					<Route key={index} {...route} />
				))}
			</Route>
			<Route path={ROUTES.PAGES_AUTHENTICATION_LOGIN} element={<Login />} />
			<Route path={ROUTES.PAGES_AUTHENTICATION_REGISTER} element={<Register />} />
			<Route path={ROUTES.PAGES_AUTHENTICATION_FORGOT_PASSWORD} element={<ForgotPassword />} />
			<Route path={ROUTES.PAGES_AUTHENTICATION_CODE_VERIFICATION} element={<VerificationCode />} />
			<Route path={ROUTES.PAGES_AUTHENTICATION_CHECK_MAIL} element={<CheckMail />} />
			<Route path={ROUTES.PAGES_AUTHENTICATION_RESET_PASSWORD} element={<ResetPassword />} />
		</Routes>
	)
}

export default App
