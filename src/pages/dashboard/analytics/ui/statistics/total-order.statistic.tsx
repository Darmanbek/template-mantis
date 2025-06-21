import { FallOutlined } from "@ant-design/icons"
import { Card, Statistic, Tag } from "antd"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"
import { type ChartColumnConfig, ChartLine } from "src/shared/ui"
import { formatCountUp } from "src/shared/utils"

const TotalOrderStatistic: FC = () => {
	const { token } = useToken()

	const config: ChartColumnConfig = {
		data: Array.from({ length: 18 }).map((_, index) => ({
			value: Math.round(1 + Math.random() * 2000),
			label: index + 1,
			category: "Orders",
		})),
		xField: "label",
		yField: "value",
		axis: {
			x: false,
			y: false,
		},
		tooltip: {
			title: "",
		},
		area: {},
		shapeField: "smooth",
		colorField: token.red,
		margin: 0,
		marginBottom: 0,
		paddingBottom: 0,
		legend: false,
		seriesField: "category",
		style: {
			lineWidth: 2,
		},
		height: 100,
	}

	return (
		<>
			<Card
				style={{ overflow: "hidden" }}
				styles={{
					body: {
						padding: 0,
					},
				}}
			>
				<div
					style={{
						padding: 24,
					}}
				>
					<Statistic
						title={"Total Order"}
						value={18800}
						formatter={(value) => formatCountUp(value)}
						suffix={
							<Tag
								icon={<FallOutlined />}
								color={"orange"}
							>
								{formatCountUp(27.4, {
									decimals: 1,
									suffix: "%",
								})}
							</Tag>
						}
					/>
				</div>
				<ChartLine {...config} />
			</Card>
		</>
	)
}

export { TotalOrderStatistic }
