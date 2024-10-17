import { CheckboxRef, ConfigProvider, Tag } from "antd"
import RadioButton, { type RadioButtonProps } from "antd/es/radio/radioButton"
import { forwardRef } from "react"
import { useStylesRadioTag } from "./useStylesRadioTag"


const UiRadioTag = forwardRef<CheckboxRef, RadioButtonProps>(
	({ children, ...rest }, ref) => {
		const { styles } = useStylesRadioTag()
		return (
			<ConfigProvider
				wave={{
					disabled: true
				}}
			>
				<RadioButton
					ref={ref}
					className={styles.radio}
					{...rest}
				>
					<ConfigProvider
						theme={{
							inherit: true
						}}
					>
						<Tag
							bordered={false}
							color={rest.checked ? "blue" : "default"}
							className={styles.tag}
						>
							{children}
						</Tag>
					</ConfigProvider>
				</RadioButton>
			</ConfigProvider>
		)
	}
)
UiRadioTag.displayName = "UiRadioTag"

export { UiRadioTag }
