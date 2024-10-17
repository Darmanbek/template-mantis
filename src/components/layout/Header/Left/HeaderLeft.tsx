import { MenuFoldOutlined, SearchOutlined } from "@ant-design/icons"
import { Button, Input, Space } from "antd"
import { type  FC } from "react"
import { Logo } from "src/components/shared"
import { useThemeStore } from "src/store"

const HeaderLeft: FC = () => {
	const toggleCollapsed = useThemeStore(
		state => state.toggleCollapsed
	)
	const { orientation } = useThemeStore()
	
	return (
		<Space>
			{orientation === "horizontal" ? <span style={{ minWidth: 200 }}>
				<Logo />
				</span> :
				<Button
					type={"text"}
					icon={<MenuFoldOutlined />}
					onClick={toggleCollapsed}
				/>
			}
			<Input
				prefix={<SearchOutlined />}
				placeholder={"Ctrl + K"}
			/>
		</Space>
	)
}

export { HeaderLeft }
