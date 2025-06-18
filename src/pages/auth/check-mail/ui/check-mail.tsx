import { useNavigate } from "@tanstack/react-router"
import { Button, Flex, Typography } from "antd"
import { type FC } from "react"
import { ROUTES } from "src/shared/config"
import { Title } from "src/shared/ui"

const CheckMail: FC = () => {
	const navigate = useNavigate()

	return (
		<>
			<Flex
				align={"end"}
				justify={"space-between"}
				style={{ marginBottom: 4 }}
			>
				<Title level={3}>Hi, Check Your Mail</Title>
			</Flex>
			<Typography.Text type={"secondary"}>
				We have sent a password recover instructions to your email.
			</Typography.Text>
			<Button
				type={"primary"}
				htmlType={"submit"}
				size={"large"}
				block={true}
				style={{
					marginTop: 24,
					marginBottom: 0,
				}}
				onClick={() =>
					navigate({
						to: ROUTES.PAGES_AUTHENTICATION_RESET_PASSWORD,
					})
				}
			>
				Sing in
			</Button>
		</>
	)
}

export default CheckMail
