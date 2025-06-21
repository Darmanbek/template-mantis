import { CaretDownFilled, DownloadOutlined } from "@ant-design/icons"
import { Button, Card, Flex, Segmented, Select, Space } from "antd"
import { type FC, useMemo, useState } from "react"
import { useToken } from "src/shared/hooks"
import { ChartLine, type ChartLineConfig, Meta } from "src/shared/ui"
import { formatCountUp } from "src/shared/utils"

const weekData = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"]

const monthData = [
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

const IncomeOverviewChart: FC = () => {
	const { token } = useToken()
	const [timeType, setTimeType] = useState("Week")

	const data = useMemo(() => {
		if (timeType === "Month") return monthData

		return weekData
	}, [timeType])

	const config: ChartLineConfig = {
		data: data.map((el) => ({
			label: el,
			value: Math.round(Math.random() * 100),
			category: "Income",
		})),
		xField: "label",
		yField: "value",
		legend: false,
		area: {},
		seriesField: "category",
		colorField: "category",
		height: 355,
	}

	return (
		<>
			<Card
				title={"Income Overview"}
				extra={
					<Segmented
						value={timeType}
						onChange={setTimeType}
						options={["Week", "Month"]}
					/>
				}
			>
				<Flex
					gap={8}
					justify={"space-between"}
				>
					<Meta
						title={
							<Space>
								<CaretDownFilled />
								{formatCountUp(112900, {
									prefix: "$",
								})}
								{formatCountUp(45.67, {
									decimals: 2,
									prefix: "(",
									suffix: "%)",
								})}
							</Space>
						}
						titleProps={{
							style: {
								color: token.red,
							},
						}}
						description={"Compare to : 01 Dec 2021-08 Jan 2022"}
					/>
					<Space>
						<Select
							placeholder={"Sort By"}
							options={[
								{
									value: "1",
									label: "By Volume",
								},
								{
									value: "2",
									label: "By Margin",
								},
								{
									value: "3",
									label: "By Sales",
								},
							]}
						/>
						<Button icon={<DownloadOutlined />} />
					</Space>
				</Flex>
				<ChartLine {...config} />
			</Card>
		</>
	)
}

export { IncomeOverviewChart }
