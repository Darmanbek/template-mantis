import { Col, Image, Radio, Row, Typography } from "antd"
import { type FC } from "react"
import { themeData } from "src/shared/data"
import { useThemeStore } from "src/shared/store"
import { RadioTag } from "src/shared/ui"

const ThemeMode: FC = () => {
	const { isDark, setDarkMode } = useThemeStore()

	const onChangeRadio = (value: boolean) => {
		setDarkMode(value)
	}

	return (
		<>
			<Radio.Group
				onChange={(e) => onChangeRadio(e.target.value)}
				style={{ width: "100%" }}
			>
				<Row gutter={16}>
					{themeData.map((el, index) => (
						<Col
							span={8}
							key={index}
						>
							<RadioTag
								value={el.value}
								checked={el.value === isDark}
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

export { ThemeMode }
