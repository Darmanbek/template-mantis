import { Card, Checkbox, Flex, Select, Space, Statistic } from "antd"
import { css, cx } from "antd-style"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"
import { ChartColumn, type ChartColumnConfig } from "src/shared/ui"
import { formatCountUp } from "src/shared/utils"

const categories = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
]

const data = [
	{
		category: "Income",
		data: [180, 90, 135, 114, 120, 145, 170, 200, 170, 230, 210, 180],
	},
	{
		category: "Cost of Sales",
		data: [120, 45, 78, 150, 168, 99, 180, 220, 180, 210, 220, 200],
	},
]

const SalesReportChart: FC = () => {
	const { token } = useToken()

	const config: ChartColumnConfig = {
		data: data.flatMap((item) =>
			categories.map((el, index) => ({
				month: el,
				value: item.data[index],
				category: item.category,
			}))
		),
		xField: "month",
		yField: "value",
		legend: false,
		seriesField: "category",
		colorField: "category",
		height: 380,
		style: {
			radiusTopLeft: token.borderRadius,
			radiusTopRight: token.borderRadius,
			radiusBottomLeft: token.borderRadius,
			radiusBottomRight: token.borderRadius,
		},
	}

	return (
		<>
			<Card
				title={"Sales Report"}
				extra={
					<Select
						defaultValue={"1"}
						style={{ minWidth: 100 }}
						options={[
							{
								value: "1",
								label: "Today",
							},
							{
								value: "2",
								label: "This Month",
							},
							{
								value: "3",
								label: "This Year",
							},
						]}
					/>
				}
			>
				<Flex justify={"space-between"}>
					<Statistic
						title={"Net Profit"}
						value={1560}
						formatter={(value) =>
							formatCountUp(value, {
								prefix: "$",
							})
						}
					/>
					<Space>
						<Checkbox
							className={cx(css`
								&.ant-checkbox-checked {
									border-color: ${token.yellow4};

									.ant-checkbox-inner {
										background-color: ${token.yellow};
									}
								}
							`)}
						>
							Income
						</Checkbox>
						<Checkbox>Cost of Sales</Checkbox>
					</Space>
				</Flex>
				<ChartColumn {...config} />
			</Card>
		</>
	)
}

export { SalesReportChart }
