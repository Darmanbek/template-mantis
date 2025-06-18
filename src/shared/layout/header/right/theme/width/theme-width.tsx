import { Col, Image, Radio, Row, Typography } from "antd"
import { type FC } from "react"
import { layoutWidthData } from "src/shared/data"
import type { EnumWidth } from "src/shared/store"
import { useThemeStore } from "src/shared/store"
import { RadioTag } from "src/shared/ui"

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
				<Row
					gutter={16}
					style={{ rowGap: 16 }}
				>
					{layoutWidthData.map((el, index) => (
						<Col
							span={8}
							key={index}
						>
							<RadioTag
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

export { ThemeWidth }
