import { SettingOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { type  FC } from "react"
import { useThemeStore } from "src/store"
import {
	ThemeContent
} from "./ThemeContent"

const Theme: FC = () => {
	const toggleOpen = useThemeStore(
		state => state.toggleOpen
	)
	
	return (
		<>
			<ThemeContent />
			<Button
				type={"text"}
				icon={<SettingOutlined spin={true} />}
				onClick={toggleOpen}
			/>
		</>
	)
}

export { Theme }
