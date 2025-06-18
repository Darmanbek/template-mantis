import { useContext } from "react"
import { AuthContext } from "src/shared/context"

export const useAuth = () => {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error("AuthContext is Not Defined!")
	}

	return context
}
