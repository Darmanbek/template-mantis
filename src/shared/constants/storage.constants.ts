export const EnumStorage = {
	TOKEN: "token",
	LANG: "lang",
} as const

export const EnumLang = {
	RU: "RU",
	EN: "EN",
} as const

export type EnumStorage = (typeof EnumStorage)[keyof typeof EnumStorage]
export type EnumLang = (typeof EnumLang)[keyof typeof EnumLang]
