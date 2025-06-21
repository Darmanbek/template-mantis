import { RiseOutlined } from "@ant-design/icons"
import { Card, Statistic, Tag } from "antd"
import { type FC } from "react"
import { ChartColumn, type ChartColumnConfig } from "src/shared/ui"
import { formatCountUp } from "src/shared/utils"

const TotalUsersStatistic: FC = () => {
	const config: ChartColumnConfig = {
		data: Array.from({ length: 27 }).map((_, index) => ({
			value: Math.round(1 + Math.random() * 300),
			label: index + 1,
			category: "Users",
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
		colorField: "category",
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
						title={"Total Users"}
						value={78250}
						formatter={(value) => formatCountUp(value)}
						suffix={
							<Tag
								icon={<RiseOutlined />}
								color={"blue"}
							>
								{formatCountUp(70.5, {
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

export { TotalUsersStatistic }
