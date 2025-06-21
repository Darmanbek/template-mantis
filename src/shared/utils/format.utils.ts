import { createElement } from "react"
import CountUp, { type CountUpProps } from "react-countup"

export const formatCountUp = <T>(value: T, props?: Omit<CountUpProps, "end">) =>
	createElement(CountUp, {
		end: Number(value || 0) || 0,
		separator: ",",
		...props,
	})

export const formatPrice = <T>(value: T) => {
	if (isNaN(Number(value))) return 0
	return Intl.NumberFormat("en-EN").format(Number(value))
}
