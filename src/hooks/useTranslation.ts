import { useTranslation as useI18Translation } from "react-i18next"

export type TranslationKeys = string;


export const useTranslation = () => {
	const { t: translate, ...rest } = useI18Translation()
	
	const t = (value: TranslationKeys) => translate(value)
	
	return { t, ...rest }
}
