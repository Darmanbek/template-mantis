import {
	BgColorsOutlined,
	BorderInnerOutlined,
	FontColorsOutlined,
	HighlightOutlined,
	LayoutOutlined,
} from "@ant-design/icons"
import { Collapse, type CollapseProps, Drawer } from "antd"
import { type FC } from "react"
import { useThemeStore } from "src/shared/store"
import { AvatarTag, Meta } from "src/shared/ui"
import { ThemeColors } from "./colors/theme-colors.tsx"
import { ThemeFont } from "./font/theme-font.tsx"
import { ThemeLayout } from "./layout/theme-layout.tsx"
import { ThemMenu } from "./menu/them-menu.tsx"
import { ThemeMode } from "./mode/theme-mode.tsx"
import { useStylesTheme } from "./use-styles-theme.ts"
import { ThemeWidth } from "./width/theme-width.tsx"

const ThemeContent: FC = () => {
	const { open, toggleOpen } = useThemeStore()
	const { direction, colorType } = useThemeStore()
	const { styles } = useStylesTheme()

	const items: CollapseProps["items"] = [
		{
			key: "1",
			label: (
				<Meta
					avatar={
						<AvatarTag
							tagProps={{
								color: colorType,
							}}
							src={<LayoutOutlined style={{ fontSize: "inherit" }} />}
						/>
					}
					title={"Theme Layout"}
					description={"Choose your layout"}
				/>
			),
			children: <ThemeLayout />,
		},
		{
			key: "2",
			label: (
				<Meta
					avatar={
						<AvatarTag
							tagProps={{
								color: colorType,
							}}
							src={<BorderInnerOutlined style={{ fontSize: "inherit" }} />}
						/>
					}
					title={"Menu Orientation"}
					description={"Choose Vertical or Horizontal Menu Orientation"}
				/>
			),
			children: <ThemMenu />,
		},
		{
			key: "3",
			label: (
				<Meta
					avatar={
						<AvatarTag
							tagProps={{
								color: colorType,
							}}
							src={<HighlightOutlined style={{ fontSize: "inherit" }} />}
						/>
					}
					title={"Theme Mode"}
					description={"Choose light or dark mode"}
				/>
			),
			children: <ThemeMode />,
		},
		{
			key: "4",
			label: (
				<Meta
					avatar={
						<AvatarTag
							tagProps={{
								color: colorType,
							}}
							src={<BgColorsOutlined style={{ fontSize: "inherit" }} />}
						/>
					}
					title={"Color Scheme"}
					description={"Choose your primary theme color"}
				/>
			),
			children: <ThemeColors />,
		},
		{
			key: "5",
			label: (
				<Meta
					avatar={
						<AvatarTag
							tagProps={{
								color: colorType,
							}}
							src={<BorderInnerOutlined style={{ fontSize: "inherit" }} />}
						/>
					}
					title={"Layout Width"}
					description={"Choose fluid or container layout"}
				/>
			),
			children: <ThemeWidth />,
		},
		{
			key: "6",
			label: (
				<Meta
					avatar={
						<AvatarTag
							tagProps={{
								color: colorType,
							}}
							src={<FontColorsOutlined style={{ fontSize: "inherit" }} />}
						/>
					}
					title={"Layout Width"}
					description={"Choose fluid or container layout"}
				/>
			),
			children: <ThemeFont />,
		},
	]

	return (
		<Drawer
			width={340}
			open={open}
			placement={direction === "ltr" ? "right" : "left"}
			onClose={toggleOpen}
			className={styles.drawer}
			classNames={{
				header: styles.header,
			}}
			styles={{
				body: {
					padding: 0,
				},
			}}
			title={"Theme Customization"}
		>
			<Collapse
				defaultActiveKey={items.map((el) => el.key) as string[]}
				ghost={true}
				className={styles.collapse}
				expandIconPosition={"end"}
				items={items}
			/>
		</Drawer>
	)
}

export { ThemeContent }
