import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { RU } from "src/assets/locales"
import { getLang } from "src/utils"

const EN = {
	translation: Object.keys(RU.translation).reduce((acc, key) => {
		acc[key] = key
		return acc
	}, {} as Record<string, string>)
}

const lang = getLang()
i18n.use(initReactI18next).init({
	resources: {
		RU,
		EN
	},
	lng: lang,
	fallbackLng: lang,
	react: { useSuspense: true },
	interpolation: { escapeValue: false }
})

export default i18n
