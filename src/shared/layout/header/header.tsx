import { type FC } from "react"
import { useToken } from "src/shared/hooks"
import { useThemeStore } from "src/shared/store"
import { LayoutHeader } from "src/shared/ui"
import { HeaderLeft } from "./left/header-left.tsx"
import { HeaderRight } from "./right/header-right.tsx"

const Header: FC = () => {
	const { orientation } = useThemeStore()
	const { token } = useToken()

	return (
		<LayoutHeader
			style={{
				paddingLeft: orientation === "horizontal" ? 24 : 8,
				paddingRight: orientation === "horizontal" ? 24 : 8,
				display: "flex",
				lineHeight: 1,
				alignItems: "center",
				justifyContent: "space-between",
				borderBottom: `1px solid ${token.colorBorderSecondary}}`,
			}}
		>
			<HeaderLeft />
			<HeaderRight />
		</LayoutHeader>
	)
}

export { Header }
