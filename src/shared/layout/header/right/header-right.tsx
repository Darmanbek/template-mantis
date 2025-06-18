import { BellOutlined, MailOutlined, TranslationOutlined, WindowsOutlined } from "@ant-design/icons"
import { Button, Space } from "antd"
import { type FC } from "react"
import { FullScreenButton } from "./full-screen/full-screen-button.tsx"
import { Profile } from "./profile/profile.tsx"
import { Theme } from "./theme/theme"

const HeaderRight: FC = () => {
	return (
		<Space size={"small"}>
			<Button
				type={"text"}
				size={"large"}
				icon={<WindowsOutlined />}
			/>
			<Button
				type={"text"}
				size={"large"}
				icon={<TranslationOutlined />}
			/>
			<Button
				type={"text"}
				size={"large"}
				icon={<BellOutlined />}
			/>
			<Button
				type={"text"}
				size={"large"}
				icon={<MailOutlined />}
			/>
			<FullScreenButton />
			<Theme />
			<Profile />
		</Space>
	)
}

export { HeaderRight }
