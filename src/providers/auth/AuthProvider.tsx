import { type  FC, PropsWithChildren } from "react"
import { Navigate } from "react-router-dom"
import { ROUTES } from "src/config/routes.config"
import { useAuthStore } from "src/store"

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const token = useAuthStore(state => state.token)
	
	if (!token) {
		return <Navigate to={ROUTES.LOGIN} replace={true} />
	}
	return children
}

export { AuthProvider }
