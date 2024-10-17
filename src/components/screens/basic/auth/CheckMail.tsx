import { Button, Card, Flex, Typography } from "antd"
import Title from "antd/es/typography/Title"
import { type  FC } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "src/components/screens/basic/auth/Auth"
import styles from "src/components/screens/basic/auth/auth.module.scss"
import { ROUTES } from "src/config"

const CheckMail: FC = () => {
	const navigate = useNavigate()
	
	return (
		<Auth>
			<Card className={styles.content}>
				<Flex
					align={"end"}
					justify={"space-between"}
					style={{ marginBottom: 4 }}
				>
					<Title level={3}>
						Hi, Check Your Mail
					</Title>
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
						marginBottom: 0
					}}
					onClick={() => navigate(ROUTES.PAGES_AUTHENTICATION_RESET_PASSWORD)}
				>
					Sing in
				</Button>
			</Card>
		</Auth>
	)
}

export { CheckMail }
