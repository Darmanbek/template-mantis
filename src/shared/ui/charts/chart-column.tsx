import { type Chart, Column, type ColumnConfig } from "@ant-design/plots"
import { forwardRef, useEffect, useState } from "react"

export type ChartColumnConfig = ColumnConfig

const ChartColumn = forwardRef<Chart, ChartColumnConfig>(({ ...props }, ref) => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(false)
	}, [])
	return (
		<Column
			ref={ref}
			loading={loading}
			{...props}
		/>
	)
})
ChartColumn.displayName = "ChartColumn"

export { ChartColumn }
