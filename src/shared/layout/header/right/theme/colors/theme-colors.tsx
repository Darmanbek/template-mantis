import { Col, Image, Radio, Row, theme, Typography } from "antd"
import { type FC } from "react"
import { colorSchemeData } from "src/shared/data"
import { useThemeStore } from "src/shared/store"
import { RadioTag } from "src/shared/ui"

const ThemeColors: FC = () => {
	const { color, setColor } = useThemeStore()

	const onChangeRadio = (value: string) => {
		setColor(value)
	}

	const { token } = theme.useToken()
	return (
		<>
			<Radio.Group
				onChange={(e) => onChangeRadio(e.target.value)}
				style={{ width: "100%" }}
			>
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
								checked={el.value === color}
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
			</Radio.Group>
		</>
	)
}

export { ThemeColors }
