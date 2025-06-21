import { FallOutlined } from "@ant-design/icons"
import { Card, Statistic, Tag } from "antd"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"
import { ChartColumn, type ChartColumnConfig } from "src/shared/ui"
import { formatCountUp } from "src/shared/utils"

const TotalSalesStatistic: FC = () => {
	const { token } = useToken()

	const config: ChartColumnConfig = {
		data: Array.from({ length: 27 }).map((_, index) => ({
			value: Math.round(1 + Math.random() * 300),
			label: index + 1,
			category: "Sales",
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
		margin: 0,
		marginBottom: 0,
		paddingBottom: 0,
		legend: false,
		seriesField: "category",
		colorField: token.orange,
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
						title={"Total Sales"}
						value={35078}
						formatter={(value) =>
							formatCountUp(value, {
								prefix: "$",
							})
						}
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
				<ChartColumn {...config} />
			</Card>
		</>
	)
}

export { TotalSalesStatistic }
