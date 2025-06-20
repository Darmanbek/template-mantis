import { Line, type LineConfig } from "@ant-design/plots"
import { Card, Segmented } from "antd"
import { type FC } from "react"

const UniqueVisitorChart: FC = () => {
	const config: LineConfig = {
		data: [
			{ month: "Jan", value: 76, category: "Pages views" },
			{ month: "Feb", value: 85, category: "Pages views" },
			{ month: "Mar", value: 101, category: "Pages views" },
			{ month: "Apr", value: 98, category: "Pages views" },
			{ month: "May", value: 87, category: "Pages views" },
			{ month: "Jun", value: 105, category: "Pages views" },
			{ month: "Jul", value: 91, category: "Pages views" },
			{ month: "Aug", value: 114, category: "Pages views" },
			{ month: "Sep", value: 94, category: "Pages views" },
			{ month: "Oct", value: 86, category: "Pages views" },
			{ month: "Nov", value: 115, category: "Pages views" },
			{ month: "Dec", value: 35, category: "Pages views" },

			{ month: "Jan", value: 110, category: "Sessions" },
			{ month: "Feb", value: 60, category: "Sessions" },
			{ month: "Mar", value: 150, category: "Sessions" },
			{ month: "Apr", value: 35, category: "Sessions" },
			{ month: "May", value: 60, category: "Sessions" },
			{ month: "Jun", value: 36, category: "Sessions" },
			{ month: "Jul", value: 26, category: "Sessions" },
			{ month: "Aug", value: 45, category: "Sessions" },
			{ month: "Sep", value: 65, category: "Sessions" },
			{ month: "Oct", value: 52, category: "Sessions" },
			{ month: "Nov", value: 53, category: "Sessions" },
			{ month: "Dec", value: 41, category: "Sessions" },
		],
		xField: "month",
		yField: "value",
		seriesField: "category",
		colorField: "category",
		shapeField: "smooth",
		height: 490,
		area: {},
		style: {
			lineWidth: 2,
		},
	}
	return (
		<>
			<Card
				title={"Unique Visitor"}
				extra={<Segmented options={["Month", "Week"]} />}
			>
				<Line {...config} />
			</Card>
		</>
	)
}

export { UniqueVisitorChart }
