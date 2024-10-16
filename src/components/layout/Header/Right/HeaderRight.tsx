import {
	BellOutlined,
	MailOutlined,
	SettingOutlined,
	TranslationOutlined,
	WindowsOutlined
} from "@ant-design/icons"
import { Button, Space } from "antd"
import { type  FC } from "react"
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
			<Button
				type={"text"}
				icon={<SettingOutlined spin={true} />}
			/>
			<Profile />
		</Space>
	)
}

export { HeaderRight }
