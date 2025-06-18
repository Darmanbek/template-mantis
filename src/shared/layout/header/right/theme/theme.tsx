import { SettingOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { type FC } from "react"
import { useThemeStore } from "src/shared/store"
import { ThemeContent } from "./theme-content.tsx"

const Theme: FC = () => {
	const toggleOpen = useThemeStore((state) => state.toggleOpen)

	return (
		<>
			<ThemeContent />
			<Button
				type={"text"}
				size={"large"}
				icon={
					<SettingOutlined
						spin={true}
						style={{ animationDuration: "3s" }}
					/>
				}
				onClick={toggleOpen}
			/>
		</>
	)
}

export { Theme }
