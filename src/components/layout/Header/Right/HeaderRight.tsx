import {
	BellOutlined,
	MailOutlined,
	TranslationOutlined,
	WindowsOutlined
} from "@ant-design/icons"
import { Button, Space } from "antd"
import { type  FC } from "react"
import { Theme } from "./Theme/Theme"
import { FullScreen } from "./FullScreen/FullScreen"
import { Profile } from "./Profile/Profile"

const HeaderRight: FC = () => {
	
	return (
		<Space>
			<Button
				type={"text"}
				icon={<WindowsOutlined />}
			/>
			<Button
				type={"text"}
				icon={<TranslationOutlined />}
			/>
			<Button
				type={"text"}
				icon={<BellOutlined />}
			/>
			<Button
				type={"text"}
				icon={<MailOutlined />}
			/>
			<FullScreen />
			<Theme />
			<Profile />
		</Space>
	)
}

export { HeaderRight }
