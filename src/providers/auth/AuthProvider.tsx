import { type  FC, PropsWithChildren } from "react"
import { Navigate } from "react-router-dom"
import { ROUTES } from "src/config/routes.config"
import { getToken } from "src/utils/storage.utils"

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const token = getToken()
	
	if (!token) {
		return <Navigate to={ROUTES.HOME} replace={true} />
	}
	return children
}

export { AuthProvider }
