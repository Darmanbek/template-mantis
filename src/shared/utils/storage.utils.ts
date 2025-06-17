import Cookies from "js-cookie"
import { EnumLang, EnumStorage } from "src/shared/constants"

export const tokenStorage = {
	get: () => Cookies.get(EnumStorage.TOKEN) || null,
	set: (token: string, remember?: boolean) => {
		Cookies.set(EnumStorage.TOKEN, token, {
			sameSite: "strict",
			expires: remember ? 30 : 1,
		})
	},
	remove: () => {
		Cookies.remove(EnumStorage.TOKEN)
	},
}

export const langStorage = {
	get: (): EnumLang => (Cookies.get(EnumStorage.LANG) as EnumLang) || EnumLang.EN,
	set: (lang: EnumLang) => {
		Cookies.set(EnumStorage.LANG, lang)
	},
}
