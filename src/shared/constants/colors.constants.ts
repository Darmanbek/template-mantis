import { theme } from "antd"

export const TOKEN = theme.getDesignToken()

export const COLORS = {
	// colorPrimary: "#1677ff",
	colorPrimary: {
		type: "blue" as const,
		color: TOKEN.blue,
	},
	// colorTheme1: "#5A54F9",
	colorTheme1: {
		type: "purple" as const,
		color: TOKEN.purple,
	},
	// colorTheme2: "#9E339F",
	colorTheme2: {
		type: "magenta" as const,
		color: TOKEN.magenta,
	},
	// colorTheme3: "#ED4192",
	colorTheme3: {
		type: "pink" as const,
		color: TOKEN.pink,
	},
	// colorTheme4: "#E0282E",
	colorTheme4: {
		type: "red" as const,
		color: TOKEN.red,
	},
	// colorTheme5: "#F4801A",
	colorTheme5: {
		type: "orange" as const,
		color: TOKEN.orange,
	},
	// colorTheme6: "#F2BD27",
	colorTheme6: {
		type: "gold" as const,
		color: TOKEN.gold,
	},
	// colorTheme7: "#00B96B",
	colorTheme7: {
		type: "green" as const,
		color: TOKEN.green,
	},
	colorTheme8: {
		type: "cyan" as const,
		color: TOKEN.cyan,
	},
}
