import {
	BellOutlined, FullscreenOutlined, MailOutlined, SettingOutlined,
	TranslationOutlined,
	WindowsOutlined
} from "@ant-design/icons"
import { Avatar, Button, Space } from "antd"
import { type  FC } from "react"

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
			<Button
				type={"text"}
				icon={<FullscreenOutlined />}
			/>
			<Button
				type={"text"}
				icon={<SettingOutlined spin={true} />}
			/>
			<Button
				type={"text"}
				size={"large"}
				style={{ height: "auto" }}
				icon={<Avatar src={"https://api.dicebear.com/7.x/miniavs/svg?seed=1"} alt={"icon"} />}
			>
				Darmanbek
			</Button>
		</Space>
	)
}

export { HeaderRight }
