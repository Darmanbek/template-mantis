import { COLORS } from "src/constants"
import { EnumOrientation, EnumType, EnumWidth } from "src/store"
import {
	colorScheme1Icon,
	colorScheme2Icon,
	colorScheme3Icon,
	colorScheme4Icon,
	colorScheme5Icon,
	colorSchemeDefaultIcon,
	layoutDefaultIcon,
	layoutMiniDrawerIcon,
	layoutRtlIcon,
	menuHorizontalIcon,
	menuVerticalIcon,
	themeDarkIcon,
	themeLightIcon
} from "./icons.data"

export const layoutTypeData = [
	{
		label: "Default",
		icon: layoutDefaultIcon,
		value: EnumType.DEFAULT
	},
	{
		label: "Mini Drawer",
		icon: layoutMiniDrawerIcon,
		value: EnumType.MINI_DRAWER
	},
	{
		label: "RTL",
		icon: layoutRtlIcon,
		value: EnumType.RTL
	}
]

export const menuOrientationData = [
	{
		label: "Vertical",
		icon: menuVerticalIcon,
		value: EnumOrientation.VERTICAL
	},
	{
		label: "Horizontal",
		icon: menuHorizontalIcon,
		value: EnumOrientation.HORIZONTAL
	}
]

export const themeData = [
	{
		label: "Light",
		icon: themeLightIcon,
		value: false
	},
	{
		label: "Dark",
		icon: themeDarkIcon,
		value: true
	}
]

export const colorSchemeData = [
	{
		label: "Default",
		icon: colorSchemeDefaultIcon,
		value: COLORS.colorPrimary
	},
	{
		label: "Theme 1",
		icon: colorScheme1Icon,
		value: COLORS.colorTheme1
	},
	{
		label: "Theme 2",
		icon: colorScheme2Icon,
		value: COLORS.colorTheme2
	},
	{
		label: "Theme 3",
		icon: colorScheme3Icon,
		value: COLORS.colorTheme3
	},
	{
		label: "Theme 4",
		icon: colorScheme4Icon,
		value: COLORS.colorTheme4
	},
	{
		label: "Theme 5",
		icon: colorScheme5Icon,
		value: COLORS.colorTheme5
	},
	{
		label: "Theme 6",
		icon: colorScheme5Icon,
		value: COLORS.colorTheme6
	},
	{
		label: "Theme 7",
		icon: colorScheme5Icon,
		value: COLORS.colorTheme7
	},
	{
		label: "Theme 8",
		icon: colorScheme5Icon,
		value: COLORS.colorTheme8
	}
]

export const layoutWidthData = [
	{
		label: "Fluid",
		icon: menuVerticalIcon,
		value: EnumWidth.FLUID
	},
	{
		label: "Container",
		icon: menuHorizontalIcon,
		value: EnumWidth.CONTAINER
	}
]

export const fontFamilyData = [
	{
		label: "Default",
		value: "default"
	},
	{
		label: "Inter",
		value: "Inter"
	},
	{
		label: "Roboto",
		value: "Roboto"
	},
	{
		label: "Poppins",
		value: "Poppins"
	},
	{
		label: "Public Sans",
		value: "Public Sans"
	}
]

