import { getToken, removeToken, saveToken, sleep } from "src/utils"
import { create } from "zustand"

interface IAuthStore {
	token: string
	loading: boolean
	login: () => void
	logout: () => void
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
		login: () => {
			set({ loading: true })
			sleep().then((token) => {
				set({ loading: false, token })
			})
		},
		logout: () => {
			set({ loading: true })
			sleep().then(() => {
				set({ loading: false, token: "" })
			})
		},
		clearToken: () => {
			removeToken()
			set({ token: "" })
		}
	})
)

export { useAuthStore }
