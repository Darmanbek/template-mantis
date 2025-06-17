import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { RU } from "src/app/locales"
import { langStorage } from "src/shared/utils"

const EN = {
	translation: Object.keys(RU.translation).reduce(
		(acc, key) => {
			acc[key] = key
			return acc
		},
		{} as Record<string, string>
	),
}

const lang = langStorage.get()
i18n.use(initReactI18next).init({
	resources: {
		RU,
		EN,
	},
	lng: lang,
	fallbackLng: lang,
	react: { useSuspense: true },
	interpolation: { escapeValue: false },
})

export default i18n
