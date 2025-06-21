import { type PresetColorKey } from "antd/es/theme/interface"
import { COLORS } from "src/shared/constants"
import { create } from "zustand"

export const EnumType = {
	DEFAULT: "default",
	MINI_DRAWER: "mini-drawer",
	RTL: "rtl",
} as const

export type EnumType = (typeof EnumType)[keyof typeof EnumType]

export const EnumDirection = {
	LTR: "ltr",
	RTL: "rtl",
} as const

export type EnumDirection = (typeof EnumDirection)[keyof typeof EnumDirection]

export const EnumOrientation = {
	HORIZONTAL: "horizontal",
	VERTICAL: "vertical",
} as const

export type EnumOrientation = (typeof EnumOrientation)[keyof typeof EnumOrientation]

export const EnumWidth = {
	FLUID: "fluid",
	CONTAINER: "container",
} as const

export type EnumWidth = (typeof EnumWidth)[keyof typeof EnumWidth]

interface IThemeStore {
	open: boolean
	toggleOpen: () => void

	type: EnumType
	setType: (type: EnumType) => void

	collapsed: boolean
	setCollapsed: (collapsed: boolean) => void
	toggleCollapsed: () => void

	direction: EnumDirection
	setDirection: (direction: EnumDirection) => void

	orientation: EnumOrientation
	setOrientation: (orientation: EnumOrientation) => void

	isDark: boolean
	setDarkMode: (isDark: boolean) => void

	colorType: PresetColorKey
	setColorType: (colorType: PresetColorKey) => void

	color: string
	setColor: (color: string) => void

	width: EnumWidth
	setWidth: (width: EnumWidth) => void

	fontFamily: string
	setFontFamily: (fontFamily: string) => void
}

const useThemeStore = create<IThemeStore>()((set) => ({
	open: false,
	toggleOpen: () => set((state) => ({ open: !state.open })),

	type: EnumType.DEFAULT,
	setType: (type) => {
		if (type === EnumType.RTL)
			return set({
				type,
				direction: EnumDirection.RTL,
			})
		if (type === EnumType.MINI_DRAWER)
			return set({
				type,
				collapsed: true,
			})
		return set({
			type,
			collapsed: false,
			direction: EnumDirection.LTR,
		})
	},

	collapsed: false,
	setCollapsed: (collapsed) => set({ collapsed }),
	toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),

	direction: EnumDirection.LTR,
	setDirection: (direction) => set({ direction }),

	orientation: EnumOrientation.VERTICAL,
	setOrientation: (orientation) => set({ orientation }),

	isDark: false,
	setDarkMode: (isDark) => set({ isDark }),

	colorType: COLORS.colorPrimary.type,
	setColorType: (colorType) => set({ colorType }),

	color: COLORS.colorPrimary.color,
	setColor: (color) => set({ color }),

	width: EnumWidth.CONTAINER,
	setWidth: (width) => set({ width }),

	fontFamily: "default",
	setFontFamily: (fontFamily) => set({ fontFamily }),
}))

export { useThemeStore }
