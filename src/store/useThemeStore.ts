import { COLORS } from "src/constants"
import { create } from "zustand"

export enum EnumType {
	DEFAULT = "default",
	MINI_DRAWER = "mini-drawer",
	RTL = "rtl",
}

export enum EnumDirection {
	LTR = "ltr",
	RTL = "rtl"
}

export enum EnumOrientation {
	HORIZONTAL = "horizontal",
	VERTICAL = "vertical"
}

export enum EnumWidth {
	FLUID = "fluid",
	CONTAINER = "container"
}

interface IThemeStore {
	open: boolean
	toggleOpen: () => void
	
	type: EnumType,
	setType: (type: EnumType) => void
	
	collapsed: boolean,
	setCollapsed: (collapsed: boolean) => void
	toggleCollapsed: () => void
	
	direction: EnumDirection,
	setDirection: (direction: EnumDirection) => void
	
	orientation: EnumOrientation
	setOrientation: (orientation: EnumOrientation) => void
	
	isDark: boolean,
	setDarkMode: (isDark: boolean) => void
	
	color: string
	setColor: (color: string) => void,
	
	width: EnumWidth,
	setWidth: (width: EnumWidth) => void,
	
	fontFamily: string,
	setFontFamily: (fontFamily: string) => void,
}

const useThemeStore = create<IThemeStore>()(
	(set) => ({
		open: false,
		toggleOpen: () => set((state) => ({ open: !state.open })),
		
		type: EnumType.DEFAULT,
		setType: (type) => {
			if (type === EnumType.RTL) return set({
				type,
				direction: EnumDirection.RTL
			})
			if (type === EnumType.MINI_DRAWER) return set({
				type,
				collapsed: true
			})
			return set({
				type,
				collapsed: false,
				direction: EnumDirection.LTR
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
		
		color: COLORS.colorPrimary,
		setColor: (color) => set({ color }),
		
		width: EnumWidth.CONTAINER,
		setWidth: (width) => set({ width }),
		
		fontFamily: "default",
		setFontFamily: (fontFamily) => set({ fontFamily })
	})
)

export { useThemeStore }
