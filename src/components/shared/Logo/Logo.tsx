import { Avatar, Space } from "antd"
import Title from "antd/es/typography/Title"
import { type  FC } from "react"

interface LogoProps {
	noTitle?: boolean;
}

const Logo: FC<LogoProps> = ({ noTitle }) => {
	return (
		<Space>
			<Avatar src={"/antd.svg"} alt={"Logo"} />
			{!noTitle &&
				<Title level={3} style={{ whiteSpace: "nowrap" }}>Mantis</Title>}
		</Space>
	)
}

export { Logo }
