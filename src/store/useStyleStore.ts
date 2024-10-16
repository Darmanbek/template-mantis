import { COLORS } from "src/constants"
import { create } from "zustand"

interface IStyleStore {
	direction: "ltr" | "rtl"
	color: string
	isDark: boolean,
	toggleDarkMode: () => void
}

const useStyleStore = create<IStyleStore>()(
	(set) => ({
		direction: "rtl",
		color: COLORS.colorPrimary,
		isDark: false,
		toggleDarkMode: () => set((state) => ({ isDark: !state.isDark }))
	})
)

export { useStyleStore }
