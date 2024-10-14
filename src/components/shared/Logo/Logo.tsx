import { Avatar, Space } from "antd"
import Title from "antd/es/typography/Title"
import { type  FC } from "react"

const Logo: FC = () => {
	return (
		<Space>
			<Avatar src={"/antd.svg"} alt={"Logo"} />
			<Title level={3}>Mantis</Title>
		</Space>
	)
}

export { Logo }
