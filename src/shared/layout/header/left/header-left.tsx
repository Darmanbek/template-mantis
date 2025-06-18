import { MenuFoldOutlined, SearchOutlined } from "@ant-design/icons"
import { Button, Input, Space } from "antd"
import { type FC } from "react"
import { useThemeStore } from "src/shared/store"
import { Logo } from "src/widgets/logo"

const HeaderLeft: FC = () => {
	const toggleCollapsed = useThemeStore((state) => state.toggleCollapsed)
	const { orientation } = useThemeStore()

	return (
		<Space>
			{orientation === "horizontal" ? (
				<span style={{ minWidth: 200 }}>
					<Logo />
				</span>
			) : (
				<Button
					type={"text"}
					size={"large"}
					icon={<MenuFoldOutlined />}
					onClick={toggleCollapsed}
				/>
			)}
			<Input
				prefix={<SearchOutlined />}
				placeholder={"Ctrl + K"}
			/>
		</Space>
	)
}

export { HeaderLeft }
