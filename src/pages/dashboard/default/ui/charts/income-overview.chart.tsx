import { type ColumnConfig } from "@ant-design/plots"
import { Card, Statistic } from "antd"
import { type FC } from "react"
import { ChartColumn } from "src/shared/ui"
import { formatCountUp } from "src/shared/utils"

const IncomeOverviewChart: FC = () => {
	const config: ColumnConfig = {
		data: [
			{ day: "Mon", value: 80, category: "Series" },
			{ day: "Tue", value: 95, category: "Series" },
			{ day: "Wen", value: 70, category: "Series" },
			{ day: "Thu", value: 42, category: "Series" },
			{ day: "Fri", value: 65, category: "Series" },
			{ day: "Sat", value: 55, category: "Series" },
			{ day: "Sun", value: 78, category: "Series" },
		],
		xField: "day",
		yField: "value",
		axis: {
			y: false,
		},
		legend: false,
		seriesField: "category",
		colorField: "category",
		height: 450,
		style: {
			radiusTopLeft: 6,
			radiusTopRight: 6,
			radiusBottomLeft: 6,
			radiusBottomRight: 6,
		},
	}
	return (
		<>
			<Card
				title={"Income Overview"}
				styles={{
					body: {
						padding: 0,
					},
				}}
			>
				<Statistic
					style={{
						padding: "24px 24px 0",
					}}
					title={"This Week Statistics"}
					value={7650}
					formatter={(value) =>
						formatCountUp(value, {
							prefix: "$",
						})
					}
				/>
				<ChartColumn {...config} />
			</Card>
		</>
	)
}

export { IncomeOverviewChart }
