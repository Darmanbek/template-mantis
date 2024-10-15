import { type  FC, PropsWithChildren, useState } from "react"
import { Navigate } from "react-router-dom"
import { ROUTES } from "src/config/routes.config"
import { getToken } from "src/utils/storage.utils"

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [token] = useState(getToken())
	
	if (!token) {
		return <Navigate to={ROUTES.LOGIN} replace={true} />
	}
	return children
}

export { AuthProvider }
