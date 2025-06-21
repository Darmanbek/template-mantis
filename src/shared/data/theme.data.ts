import { COLORS } from "src/shared/constants"
import { EnumOrientation, EnumType, EnumWidth } from "src/shared/store"
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
	themeLightIcon,
} from "./icons.data"

export const layoutTypeData = [
	{
		label: "Default",
		icon: layoutDefaultIcon,
		value: EnumType.DEFAULT,
	},
	{
		label: "Mini Drawer",
		icon: layoutMiniDrawerIcon,
		value: EnumType.MINI_DRAWER,
	},
	{
		label: "RTL",
		icon: layoutRtlIcon,
		value: EnumType.RTL,
	},
]

export const menuOrientationData = [
	{
		label: "Vertical",
		icon: menuVerticalIcon,
		value: EnumOrientation.VERTICAL,
	},
	{
		label: "Horizontal",
		icon: menuHorizontalIcon,
		value: EnumOrientation.HORIZONTAL,
	},
]

export const themeData = [
	{
		label: "Light",
		icon: themeLightIcon,
		value: false,
	},
	{
		label: "Dark",
		icon: themeDarkIcon,
		value: true,
	},
]

export const colorSchemeData = [
	{
		label: "Default",
		icon: colorSchemeDefaultIcon,
		type: COLORS.colorPrimary.type,
		value: COLORS.colorPrimary.color,
	},
	{
		label: "Theme 1",
		icon: colorScheme1Icon,
		type: COLORS.colorTheme1.type,
		value: COLORS.colorTheme1.color,
	},
	{
		label: "Theme 2",
		icon: colorScheme2Icon,
		type: COLORS.colorTheme2.type,
		value: COLORS.colorTheme2.color,
	},
	{
		label: "Theme 3",
		icon: colorScheme3Icon,
		type: COLORS.colorTheme3.type,
		value: COLORS.colorTheme3.color,
	},
	{
		label: "Theme 4",
		icon: colorScheme4Icon,
		type: COLORS.colorTheme4.type,
		value: COLORS.colorTheme4.color,
	},
	{
		label: "Theme 5",
		icon: colorScheme5Icon,
		type: COLORS.colorTheme5.type,
		value: COLORS.colorTheme5.color,
	},
	{
		label: "Theme 6",
		icon: colorScheme5Icon,
		type: COLORS.colorTheme6.type,
		value: COLORS.colorTheme6.color,
	},
	{
		label: "Theme 7",
		icon: colorScheme5Icon,
		type: COLORS.colorTheme7.type,
		value: COLORS.colorTheme7.color,
	},
	{
		label: "Theme 8",
		icon: colorScheme5Icon,
		type: COLORS.colorTheme8.type,
		value: COLORS.colorTheme8.color,
	},
]

export const layoutWidthData = [
	{
		label: "Fluid",
		icon: menuVerticalIcon,
		value: EnumWidth.FLUID,
	},
	{
		label: "Container",
		icon: menuHorizontalIcon,
		value: EnumWidth.CONTAINER,
	},
]

export const fontFamilyData = [
	{
		label: "Default",
		value: "default",
	},
	{
		label: "Inter",
		value: "Inter",
	},
	{
		label: "Roboto",
		value: "Roboto",
	},
	{
		label: "Poppins",
		value: "Poppins",
	},
	{
		label: "Public Sans",
		value: "Public Sans",
	},
]
