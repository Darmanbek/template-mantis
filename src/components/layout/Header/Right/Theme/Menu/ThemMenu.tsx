import { Col, Image, Radio, Row, Typography } from "antd"
import { type  FC } from "react"
import { UiRadioTag } from "src/components/ui"
import { menuOrientationData } from "src/data"
import { EnumOrientation, useThemeStore } from "src/store"

const ThemMenu: FC = () => {
	const { setOrientation, orientation } = useThemeStore()
	
	const onChangeRadio = (value: EnumOrientation) => {
		setOrientation(value)
	}
	
	return (
		<>
			<Radio.Group
				onChange={(e) => onChangeRadio(e.target.value)}
				style={{ width: "100%" }}
			>
				<Row gutter={16}>
					{menuOrientationData.map((el, index) => (
						<Col span={8} key={index}>
							<UiRadioTag
								value={el.value}
								checked={el.value === orientation}
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

export { ThemMenu }
