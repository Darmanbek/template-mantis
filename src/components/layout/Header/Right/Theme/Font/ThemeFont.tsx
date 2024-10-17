import { Card, Col, ConfigProvider, Radio, Row, theme, Typography } from "antd"
import { type  FC } from "react"
import { UiRadioTag } from "src/components/ui"
import { fontFamilyData } from "src/data"
import { useThemeStore } from "src/store"

const ThemeFont: FC = () => {
	const { fontFamily, setFontFamily } = useThemeStore()
	
	const onChangeRadio = (value: string) => {
		setFontFamily(value)
	}
	const token = theme.getDesignToken()
	return (
		<>
			<Radio.Group
				onChange={(e) => onChangeRadio(e.target.value)}
				style={{ width: "100%" }}
			>
				<Row gutter={16} style={{ rowGap: 16 }}>
					{fontFamilyData.map((el, index) => (
						<Col span={9} key={index}>
							<UiRadioTag
								value={el.value}
								checked={el.value === fontFamily}
							>
								<ConfigProvider
									theme={{
										token: {
											fontFamily: el.value === "default" ? token.fontFamily : `${el.value}, ${token.fontFamily}`
										}
									}}
								>
									<Card
										styles={{
											body: {
												padding: 16
											}
										}}
									>
										<Typography.Title level={4}>
											Aa
										</Typography.Title>
										<Typography.Text
											type={"secondary"}
											style={{ whiteSpace: "nowrap" }}>
											{el.label}
										</Typography.Text>
									</Card>
								</ConfigProvider>
							</UiRadioTag>
						</Col>
					))}
				</Row>
			</Radio.Group>
		</>
	)
}

export { ThemeFont }
