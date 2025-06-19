import { createElement } from "react"
import CountUp, { type CountUpProps } from "react-countup"

export const formatCountUp = <T>(value: T, props?: Omit<CountUpProps, "end">) =>
	createElement(CountUp, {
		end: Number(value || 0) || 0,
		separator: ",",
		...props,
	})
