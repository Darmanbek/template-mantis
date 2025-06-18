import { Image, Space } from "antd"
import Title from "antd/es/typography/Title"
import { type FC } from "react"

interface LogoProps {
	collapsed?: boolean
}

const Logo: FC<LogoProps> = ({ collapsed }) => {
	return (
		<Space>
			<Image
				preview={false}
				src={"/antd.svg"}
				width={32}
				height={32}
				fallback={"/public/antd.svg"}
				alt={"Logo"}
			/>
			{!collapsed && (
				<Title
					level={3}
					style={{ whiteSpace: "nowrap" }}
				>
					Mantis
				</Title>
			)}
		</Space>
	)
}

export { Logo }
