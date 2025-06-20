import { type Chart, Line, type LineConfig } from "@ant-design/plots"
import { forwardRef, useEffect, useState } from "react"

export type ChartLineConfig = LineConfig

const ChartLine = forwardRef<Chart, ChartLineConfig>(({ ...props }, ref) => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(false)
	}, [])
	return (
		<Line
			ref={ref}
			loading={loading}
			{...props}
		/>
	)
})
ChartLine.displayName = "ChartLine"

export { ChartLine }
