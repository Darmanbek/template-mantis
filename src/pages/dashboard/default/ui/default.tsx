import { FallOutlined, RiseOutlined } from "@ant-design/icons"
import { Card, Col, Row, Statistic, Tag, type TagProps } from "antd"
import Text from "antd/es/typography/Text"
import type { FC, PropsWithChildren } from "react"
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
		</>
	)
}

export default Default
