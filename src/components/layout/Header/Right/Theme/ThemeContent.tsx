import { LayoutOutlined } from "@ant-design/icons"
import { Avatar, Collapse, type CollapseProps, Drawer, Tag } from "antd"
import { Meta } from "antd/es/list/Item"
import { type  FC } from "react"
import {
	useStylesTheme
} from "./useStylesTheme"
import { useThemeStore } from "src/store"

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`


const ThemeContent: FC = () => {
	const { open, toggleOpen } = useThemeStore()
	const { styles } = useStylesTheme()
	
	const items: CollapseProps["items"] = [
		{
			key: "1",
			label: (
				<Meta
					style={{
						display: "flex",
						gap: 8,
						textAlign: "start",
						alignItems: "center"
					}}
					avatar={(
						<Avatar
							shape={"square"}
							size={"large"}
							src={<Tag
								bordered={false}
								color={"blue"}
								style={{
									height: "inherit",
									width: "inherit",
									fontSize: 16,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									padding: 0,
									margin: 0
								}}
							>
								<LayoutOutlined style={{ fontSize: "inherit" }} />
							</Tag>}
						/>
					)}
					title={"Theme Layout"}
					description={"Choose your layout"}
				/>
			),
			children: <p>{text}</p>
		},
		{
			key: "2",
			label: "This is panel header 2",
			children: <p>{text}</p>
		},
		{
			key: "3",
			label: "This is panel header 3",
			children: <p>{text}</p>
		}
	]
	
	return (
		<Drawer
			width={340}
			open={open}
			onClose={toggleOpen}
			className={styles.drawer}
			classNames={{
				header: styles.header
			}}
			styles={{
				body: {
					padding: 0
				}
			}}
			title={"Theme Customization"}
		>
			<Collapse
				ghost={true}
				className={styles.collapse}
				expandIconPosition={"end"}
				items={items}
			/>
		</Drawer>
	)
}

export { ThemeContent }
