import type { CheckboxRef } from "antd"
import { ConfigProvider, Tag } from "antd"
import RadioButton, { type RadioButtonProps } from "antd/es/radio/radioButton"
import { forwardRef } from "react"

const RadioTag = forwardRef<CheckboxRef, RadioButtonProps>(({ children, ...rest }, ref) => {
	return (
		<ConfigProvider
			wave={{
				disabled: true,
			}}
		>
			<RadioButton
				ref={ref}
				style={{
					width: "100%",
					height: "auto",
					border: "none",
					borderColor: "transparent",
					padding: 0,
				}}
				{...rest}
			>
				<ConfigProvider
					theme={{
						inherit: true,
					}}
				>
					<Tag
						bordered={false}
						color={rest.checked ? "blue" : "default"}
						style={{
							padding: 8,
							height: "inherit",
							width: "inherit",
							display: "flex",
							flexDirection: "column",
							textAlign: "center",
							alignItems: "center",
							margin: 0,
						}}
					>
						{children}
					</Tag>
				</ConfigProvider>
			</RadioButton>
		</ConfigProvider>
	)
})
RadioTag.displayName = "UiRadioTag"

export { RadioTag }
