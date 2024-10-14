import { Menu } from "antd"
import { type  FC } from "react"
import { Logo } from "src/components/shared"
import { menu } from "./menu"

const SideMenu: FC = () => {
	return (
		<>
			<div>
				<Logo />
			</div>
			<Menu
				items={menu}
				mode={"inline"}
			/>
		</>
	)
}

export { SideMenu }
