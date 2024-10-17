import { Col, Image, Radio, Row, Typography } from "antd"
import { type  FC } from "react"
import { UiRadioTag } from "src/components/ui"
import { layoutWidthData } from "src/data"
import { EnumWidth, useThemeStore } from "src/store"

const ThemeWidth: FC = () => {
	const { setWidth, width } = useThemeStore()
	
	const onChangeRadio = (value: EnumWidth) => {
		setWidth(value)
	}
	
	return (
		<>
			<Radio.Group
				onChange={(e) => onChangeRadio(e.target.value)}
				style={{ width: "100%" }}
			>
				<Row gutter={16} style={{ rowGap: 16 }}>
					{layoutWidthData.map((el, index) => (
						<Col span={8} key={index}>
							<UiRadioTag
								value={el.value}
								checked={el.value === width}
							>
								<Image
									width={64}
									height={64}
									preview={false}
									src={el.icon}
									alt={"Icon"}
								/>
								<Typography.Text
									style={{ whiteSpace: "nowrap", marginTop: 12 }}>
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

export { ThemeWidth }
