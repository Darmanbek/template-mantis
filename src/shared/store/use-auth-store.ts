import { tokenStorage } from "src/shared/utils"
import { create } from "zustand"

interface IAuthStore {
	token: string | null
	setToken: (token: string) => void
	clearToken: () => void
}

const useAuthStore = create<IAuthStore>()((set) => ({
	token: tokenStorage.get(),
	loading: false,
	setToken: (token) => {
		tokenStorage.set(token)
		set({ token })
	},
	clearToken: () => {
		tokenStorage.remove()
		set({ token: "" })
	},
}))

export { useAuthStore }
