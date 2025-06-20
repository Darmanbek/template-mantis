import { Card, Flex, List } from "antd"
import { css, cx } from "antd-style"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"
import { ChartLine, type ChartLineConfig, Text, Title } from "src/shared/ui"
import { formatCountUp } from "src/shared/utils"

const data = [
	// { month: "Jan", value: 76, category: "Series" },
	// { month: "Feb", value: 85, category: "Series" },
	// { month: "Mar", value: 101, category: "Series" },
	// { month: "Apr", value: 98, category: "Series" },
	// { month: "May", value: 87, category: "Series" },
	{ month: "Jun", value: 58, category: "Series" },
	{ month: "Jul", value: 115, category: "Series" },
	{ month: "Aug", value: 28, category: "Series" },
	{ month: "Sep", value: 83, category: "Series" },
	{ month: "Oct", value: 63, category: "Series" },
	{ month: "Nov", value: 75, category: "Series" },
	{ month: "Dec", value: 35, category: "Series" },
]

const AnalyticsReportList: FC = () => {
	const { token } = useToken()

	const config: ChartLineConfig = {
		data,
		xField: "month",
		yField: "value",
		seriesField: "category",
		shapeField: "smooth",
		axis: {
			y: false,
		},
		colorField: token.yellow,
		height: 340,
	}

	return (
		<>
			<Card
				title={"Analytics Report"}
				styles={{
					body: {
						padding: 0,
					},
				}}
			>
				<List
					dataSource={[
						{
							name: "Company Finance Growth",
							value: 45.14,
						},
						{
							name: "Company Expenses Ratio",
							value: 45.14,
						},
						{
							name: "Business Risk Cases",
							value: 0,
						},
					]}
					renderItem={(item, index) => (
						<List.Item
							key={index}
							style={{
								paddingInline: token.padding,
							}}
							className={cx(
								css({
									"&:hover": {
										backgroundColor: token.colorFillAlter,
									},
								})
							)}
						>
							<Flex
								justify={"space-between"}
								style={{ width: "100%" }}
							>
								<Text>{item.name}</Text>
								<Title level={5}>
									{item.value <= 0 ? (
										<span>Low</span>
									) : (
										formatCountUp(item.value, {
											prefix: item.value > 1 ? "+" : "",
											suffix: "%",
										})
									)}
								</Title>
							</Flex>
						</List.Item>
					)}
				/>
				<ChartLine {...config} />
			</Card>
		</>
	)
}

export { AnalyticsReportList }
