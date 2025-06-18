import { useNavigate } from "@tanstack/react-router"
import { Menu, type MenuProps } from "antd"
import { type FC } from "react"
import { useToken } from "src/shared/hooks"
import { useThemeStore } from "src/shared/store"
import { Container } from "src/shared/ui"
import { items } from "./items"

const Navbar: FC = () => {
	const navigate = useNavigate()
	const { width } = useThemeStore()
	const { token } = useToken()

	const onSelectMenu = (key: string) => {
		navigate({
			to: key,
		})
	}

	const onClick: MenuProps["onClick"] = (e) => {
		console.log("click ", e)
	}
	return (
		<nav
			style={{
				backgroundColor: token.colorBgContainer,
			}}
		>
			<Container
				style={{ flexGrow: 0 }}
				type={width}
			>
				<Menu
					mode={"horizontal"}
					items={items}
					onClick={onClick}
					onSelect={(item) => onSelectMenu(item.key)}
				/>
			</Container>
		</nav>
	)
}

export { Navbar }
