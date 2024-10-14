import { Menu } from "antd"
import { type  FC } from "react"
import { menu } from "./menu"

const SideMenu: FC = () => {
	return (
		<>
			<div>
				<h1>Logo</h1>
			</div>
			<Menu
				items={menu}
				mode={"inline"}
			/>
		</>
	)
}

export { SideMenu }
