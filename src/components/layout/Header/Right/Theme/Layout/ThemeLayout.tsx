import { Col, Image, Radio, Row, Typography } from "antd"
import { type  FC } from "react"
import { UiRadioTag } from "src/components/ui"
import { layoutTypeData } from "src/data"
import { EnumType, useThemeStore } from "src/store"

const ThemeLayout: FC = () => {
	const { type, setType, orientation } = useThemeStore()
	
	const onChangeRadio = (value: EnumType) => {
		setType(value)
	}
	
	return (
		<>
			<Radio.Group
				onChange={(e) => onChangeRadio(e.target.value)}
				style={{ width: "100%" }}
			>
				<Row gutter={16}>
					{layoutTypeData.filter(el => orientation === "horizontal" ? el.value !== "mini-drawer" : el).map((el, index) => (
						<Col span={8} key={index} style={{ width: "auto" }}>
							<UiRadioTag
								value={el.value}
								checked={el.value === type}
							>
								<Image
									width={64}
									height={64}
									preview={false}
									src={el.icon}
									alt={"Icon"}
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

export { ThemeLayout }
