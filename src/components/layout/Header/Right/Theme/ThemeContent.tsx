import {
	BgColorsOutlined,
	BorderInnerOutlined, FontColorsOutlined,
	HighlightOutlined,
	LayoutOutlined
} from "@ant-design/icons"
import { Collapse, type CollapseProps, Drawer } from "antd"
import { type  FC } from "react"
import { ThemeFont } from "./Font/ThemeFont"
import { ThemeWidth } from "./Width/ThemeWidth"
import { ThemeColors } from "./Colors/ThemeColors"
import { ThemMenu } from "./Menu/ThemMenu"
import { ThemeMode } from "./Mode/ThemeMode"
import { UiAvatarTag, UiMeta } from "src/components/ui"
import { useStylesTheme } from "./useStylesTheme"
import { useThemeStore } from "src/store"
import { ThemeLayout } from "./Layout/ThemeLayout"


const ThemeContent: FC = () => {
	const { open, toggleOpen } = useThemeStore()
	const { direction } = useThemeStore()
	const { styles } = useStylesTheme()
	
	const items: CollapseProps["items"] = [
		{
			key: "1",
			label: (
				<UiMeta
					avatar={(
						<UiAvatarTag
							tagProps={{
								color: "blue"
							}}
							src={<LayoutOutlined style={{ fontSize: "inherit" }} />}
						/>
					)}
					title={"Theme Layout"}
					description={"Choose your layout"}
				/>
			),
			children: <ThemeLayout />
		},
		{
			key: "2",
			label: (
				<UiMeta
					avatar={(
						<UiAvatarTag
							tagProps={{
								color: "blue"
							}}
							src={<BorderInnerOutlined style={{ fontSize: "inherit" }} />}
						/>
					)}
					title={"Menu Orientation"}
					description={"Choose Vertical or Horizontal Menu Orientation"}
				/>
			),
			children: <ThemMenu />
		},
		{
			key: "3",
			label: (
				<UiMeta
					avatar={(
						<UiAvatarTag
							tagProps={{
								color: "blue"
							}}
							src={<HighlightOutlined style={{ fontSize: "inherit" }} />}
						/>
					)}
					title={"Theme Mode"}
					description={"Choose light or dark mode"}
				/>
			),
			children: <ThemeMode />
		},
		{
			key: "4",
			label: (
				<UiMeta
					avatar={(
						<UiAvatarTag
							tagProps={{
								color: "blue"
							}}
							src={<BgColorsOutlined style={{ fontSize: "inherit" }} />}
						/>
					)}
					title={"Color Scheme"}
					description={"Choose your primary theme color"}
				/>
			),
			children: <ThemeColors />
		},
		{
			key: "5",
			label: (
				<UiMeta
					avatar={(
						<UiAvatarTag
							tagProps={{
								color: "blue"
							}}
							src={<BorderInnerOutlined style={{ fontSize: "inherit" }} />}
						/>
					)}
					title={"Layout Width"}
					description={"Choose fluid or container layout"}
				/>
			),
			children: <ThemeWidth />
		},
		{
			key: "6",
			label: (
				<UiMeta
					avatar={(
						<UiAvatarTag
							tagProps={{
								color: "blue"
							}}
							src={<FontColorsOutlined style={{ fontSize: "inherit" }} />}
						/>
					)}
					title={"Layout Width"}
					description={"Choose fluid or container layout"}
				/>
			),
			children: <ThemeFont />
		}
	]
	
	return (
		<Drawer
			width={340}
			open={open}
			placement={direction === "ltr" ? "right" : "left"}
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
				defaultActiveKey={items.map(el => el.key) as string[]}
				ghost={true}
				className={styles.collapse}
				expandIconPosition={"end"}
				items={items}
			/>
		</Drawer>
	)
}

export { ThemeContent }
