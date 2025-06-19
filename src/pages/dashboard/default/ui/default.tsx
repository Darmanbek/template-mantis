import { FallOutlined, RiseOutlined } from "@ant-design/icons"
import { Column, type ColumnConfig, Line, type LineConfig } from "@ant-design/plots"
import { Card, Col, Row, Segmented, Statistic, Tag, type TagProps } from "antd"
import Text from "antd/es/typography/Text"
import { type FC, type PropsWithChildren, useEffect, useState } from "react"
import { formatCountUp } from "src/shared/utils"

const TagText: FC<PropsWithChildren<{ color: TagProps["color"] }>> = ({ children, color }) => (
	<Tag
		style={{ backgroundColor: "transparent", padding: 0, border: "none", margin: 0 }}
		color={color}
	>
		{children}
	</Tag>
)

const ExtraText: FC<PropsWithChildren> = ({ children }) => (
	<Text
		type={"secondary"}
		style={{ fontSize: 12 }}
	>
		{children}
	</Text>
)

const statisticData = [
	{
		title: "Total Page Views",
		value: 442236,
		percent: 59.3,
		extra: (
			<ExtraText>
				You made an extra <TagText color={"blue"}>{formatCountUp(35000)}</TagText> this year
			</ExtraText>
		),
	},
	{
		title: "Total Users",
		value: 78250,
		percent: 70.5,
		extra: (
			<ExtraText>
				You made an extra <TagText color={"blue"}>{formatCountUp(8900)}</TagText> this year
			</ExtraText>
		),
	},
	{
		title: "Total Order",
		value: 18800,
		percent: 27.4,
		extra: (
			<ExtraText>
				You made an extra <TagText color={"orange"}>{formatCountUp(1943)}</TagText> this year
			</ExtraText>
		),
	},
	{
		title: "Total Sales",
		value: 35078,
		percent: 27.4,
		extra: (
			<ExtraText>
				You made an extra <TagText color={"orange"}>{formatCountUp(20395)}</TagText> this year
			</ExtraText>
		),
	},
]

const ChartBar = () => {
	const [loading, setLoading] = useState(true)
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

	useEffect(() => {
		setLoading(false)
	}, [])
	return (
		<Column
			loading={loading}
			{...config}
		/>
	)
}

const ChartLine = () => {
	const [loading, setLoading] = useState(true)
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
		area: {},
		style: {
			lineWidth: 2,
		},
	}

	useEffect(() => {
		setLoading(false)
	}, [])
	return (
		<Line
			loading={loading}
			{...config}
		/>
	)
}

const Default: FC = () => {
	return (
		<>
			<Row
				gutter={24}
				style={{ rowGap: 24 }}
			>
				{statisticData.map((el, index) => (
					<Col
						key={index}
						xs={24}
						sm={12}
						md={6}
					>
						<Card>
							<Statistic
								title={el.title}
								value={el.value}
								formatter={(value) => formatCountUp(value)}
								suffix={
									<Tag
										style={{ marginLeft: 8 }}
										icon={el.percent >= 50 ? <RiseOutlined /> : <FallOutlined />}
										color={el.percent >= 50 ? "blue" : "orange"}
									>
										{formatCountUp(el.percent, {
											suffix: "%",
											decimals: 1,
										})}
									</Tag>
								}
							/>
							<div style={{ marginTop: 16 }}>{el.extra}</div>
						</Card>
					</Col>
				))}
			</Row>
			<Row
				gutter={24}
				style={{ rowGap: 24 }}
			>
				<Col
					xs={24}
					md={16}
				>
					<Card
						title={"Unique Visitor"}
						extra={<Segmented options={["Month", "Week"]} />}
					>
						<ChartLine />
					</Card>
				</Col>
				<Col
					xs={24}
					md={8}
				>
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
						<ChartBar />
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Default
