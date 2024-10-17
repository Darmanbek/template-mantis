import { getToken, removeToken, saveToken } from "src/utils"
import { create } from "zustand"

interface IAuthStore {
	token: string
	setToken: (token: string) => void
	clearToken: () => void
}

const useAuthStore = create<IAuthStore>()(
	(set) => ({
		token: getToken(),
		loading: false,
		setToken: (token) => {
			saveToken(token)
			set({ token })
		},
		clearToken: () => {
			removeToken()
			set({ token: "" })
		}
	})
)

export { useAuthStore }
