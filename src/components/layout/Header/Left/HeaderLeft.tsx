import { MenuFoldOutlined, SearchOutlined } from "@ant-design/icons"
import { Button, Input, Space } from "antd"
import { type  FC } from "react"
import { useMenuStore } from "src/store"

const HeaderLeft: FC = () => {
	const toggleCollapsed = useMenuStore(
		state => state.toggleCollapsed
	)
	
	return (
		<Space>
			<Button
				type={"text"}
				icon={<MenuFoldOutlined />}
				onClick={toggleCollapsed}
			/>
			<Input
				prefix={<SearchOutlined />}
				placeholder={"Ctrl + K"}
			/>
		</Space>
	)
}

export { HeaderLeft }
