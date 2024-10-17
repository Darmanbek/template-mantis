import { Menu, type MenuProps } from "antd"
import { type  FC } from "react"
import { useNavigate } from "react-router-dom"
import { items } from "./items"
import { useThemeStore } from "src/store"
import { useStylesNavbar } from "./useStylesNavbar"
import { UiContainer } from "src/components/ui"

const Navbar: FC = () => {
	const navigate = useNavigate()
	const { styles } = useStylesNavbar()
	const { width } = useThemeStore()
	
	const onSelectMenu = (key: string) => {
		navigate(key)
	}
	
	const onClick: MenuProps["onClick"] = (e) => {
		console.log("click ", e)
	}
	return (
		<nav className={styles.nav}>
			<UiContainer style={{ flexGrow: 0 }} type={width}>
				<Menu
					mode={"horizontal"}
					items={items}
					onClick={onClick}
					onSelect={(item) => onSelectMenu(item.key)}
				/>
			</UiContainer>
		</nav>
	)
}

export { Navbar }
