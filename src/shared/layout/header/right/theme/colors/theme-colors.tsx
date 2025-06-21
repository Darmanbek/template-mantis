import { Col, Image, Row, theme, Typography } from "antd"
import { type FC } from "react"
import { colorSchemeData } from "src/shared/data"
import { useThemeStore } from "src/shared/store"
import { RadioTag } from "src/shared/ui"

const ThemeColors: FC = () => {
	const { colorType, setColor, setColorType } = useThemeStore()

	const { token } = theme.useToken()
	return (
		<>
			<Row
				gutter={16}
				style={{ rowGap: 10 }}
			>
				{colorSchemeData.map((el, index) => (
					<Col
						span={8}
						key={index}
						style={{ width: "100%" }}
					>
						<RadioTag
							value={el.value}
							checked={el.type === colorType}
							onChange={() => {
								setColor(el.value)
								setColorType(el.type)
							}}
						>
							<Image
								width={40}
								height={40}
								preview={false}
								src={el.icon}
								alt={"Icon"}
								style={{
									backgroundColor: el.value,
									borderRadius: token.borderRadiusSM,
								}}
							/>
							<Typography.Text style={{ whiteSpace: "nowrap", marginTop: 12 }}>
								{el.label}
							</Typography.Text>
						</RadioTag>
					</Col>
				))}
			</Row>
		</>
	)
}

export { ThemeColors }
