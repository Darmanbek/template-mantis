import { Col, Image, Radio, Row, theme, Typography } from "antd"
import { type  FC } from "react"
import { UiRadioTag } from "src/components/ui"
import { colorSchemeData } from "src/data"
import { useThemeStore } from "src/store"

const ThemeColors: FC = () => {
	const { color, setColor } = useThemeStore()
	
	const onChangeRadio = (value: string) => {
		setColor(value)
	}
	
	const {
		token
	} = theme.useToken()
	return (
		<>
			<Radio.Group
				onChange={(e) => onChangeRadio(e.target.value)}
				style={{ width: "100%" }}
			>
				<Row gutter={16} style={{ rowGap: 10 }}>
					{colorSchemeData.map((el, index) => (
						<Col span={8} key={index} style={{ width: "100%" }}>
							<UiRadioTag
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
										borderRadius: token.borderRadiusSM
									}}
								/>
								<Typography.Text style={{ whiteSpace: "nowrap", marginTop: 12 }}>
									{el.label}
								</Typography.Text>
							</UiRadioTag>
						</Col>
					))}
				</Row>
			</Radio.Group>
		</>
	)
}

export { ThemeColors }
