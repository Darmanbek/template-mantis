import { Menu } from "antd"
import clsx from "clsx"
import { type  FC } from "react"
import { Logo } from "src/components/shared"
import { useMenuStore } from "src/store"
import { menu } from "./menu"
import styles from "./sidebar.module.scss"

const SideMenu: FC = () => {
	const { collapsed } = useMenuStore()
	return (
		<>
			<div className={clsx(styles.logo, collapsed && styles.collapsed)}>
				<Logo noTitle={collapsed} />
			</div>
			<Menu
				items={menu.filter((item) => collapsed ? item?.type !== "group" : item)}
				mode={"inline"}
				className={styles.menu}
			/>
		</>
	)
}

export { SideMenu }
