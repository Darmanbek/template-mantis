import { Light } from "@antv/g2"
import { Card, Checkbox, ConfigProvider, Flex, Select, Space, Statistic } from "antd"
import { type FC, useMemo, useState } from "react"
import { useToken } from "src/shared/hooks"
import { ChartColumn, type ChartColumnConfig } from "src/shared/ui"
import { formatCountUp } from "src/shared/utils"

const { category10 } = Light()

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
		color: category10?.[0],
		data: [180, 90, 135, 114, 120, 145, 170, 200, 170, 230, 210, 180],
	},
	{
		category: "Cost of Sales",
		color: category10?.[1],
		data: [120, 45, 78, 150, 168, 99, 180, 220, 180, 210, 220, 200],
	},
]

const SalesReportChart: FC = () => {
	const { token } = useToken()
	const [legends, setLegends] = useState(() =>
		data.map((el) => ({
			value: true,
			color: el.color,
			category: el.category,
		}))
	)

	const filteredData = useMemo(() => {
		const filteredCategories = legends.filter((el) => el.value).map((el) => el.category)
		return data.filter((el) => filteredCategories.includes(el.category))
	}, [legends])

	const config: ChartColumnConfig = {
		data: filteredData.flatMap((item) =>
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
						{legends.map((el, index) => (
							<ConfigProvider
								key={index}
								theme={{
									token: {
										colorPrimary: el.color,
									},
								}}
							>
								<Checkbox
									key={index}
									checked={el.value}
									onChange={(e) =>
										setLegends((prev) =>
											prev.map((item) => ({
												...item,
												value: item.category === el.category ? e.target.checked : item.value,
											}))
										)
									}
								>
									{el.category}
								</Checkbox>
							</ConfigProvider>
						))}
					</Space>
				</Flex>
				<ChartColumn {...config} />
			</Card>
		</>
	)
}

export { SalesReportChart }
