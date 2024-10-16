import { COLORS } from "src/constants"
import { create } from "zustand"

interface IThemeStore {
	open: boolean
	toggleOpen: () => void
	direction: "ltr" | "rtl",
	toggleDirection: () => void
	color: string
	setColor: (color: string) => void
	isDark: boolean,
	toggleDarkMode: () => void
}

const useThemeStore = create<IThemeStore>()(
	(set) => ({
		open: false,
		toggleOpen: () => set((state) => ({ open: !state.open })),
		direction: "rtl",
		toggleDirection: () => set((state) => ({ direction: state.direction === "rtl" ? "ltr" : "rtl" })),
		color: COLORS.colorPrimary,
		setColor: (color) => set({ color }),
		isDark: false,
		toggleDarkMode: () => set((state) => ({ isDark: !state.isDark }))
	})
)

export { useThemeStore }
