import { Button, Card, Flex, Form, Input, Typography } from "antd"
import Title from "antd/es/typography/Title"
import { type  FC } from "react"
import { Link } from "react-router-dom"
import { Auth } from "src/components/screens/basic/auth/Auth"
import styles from "src/components/screens/basic/auth/auth.module.scss"
import { ROUTES } from "src/config"
import { FORM_DEFAULT } from "src/constants"

const VerificationCode: FC = () => {
	return (
		<Auth>
			<Card className={styles.content}>
				<Flex
					align={"end"}
					justify={"space-between"}
					style={{ marginBottom: 4 }}
				>
					<Title level={3}>
						Enter Verification Code
					</Title>
					<Link to={ROUTES.PAGES_AUTHENTICATION_LOGIN}>
						Back to Login
					</Link>
				</Flex>
				<Typography.Text>
					We send you on mail.
				</Typography.Text>
				<Form
					{...FORM_DEFAULT}
					name={"Forgot Password Form"}
					size={"large"}
					style={{ marginTop: 24 }}
				>
					<Form.Item
						name={"code"}
						label={"We`ve send you code on jone. ****@company.com"}
						rules={[
							{ required: true }
						]}
					>
						<Input.OTP length={4} style={{ width: "100%" }} />
					</Form.Item>
					<Form.Item
						style={{
							marginTop: 24,
							marginBottom: 24
						}}
					>
						<Button
							type={"primary"}
							htmlType={"submit"}
							block={true}
						>
							Send Password Reset Email
						</Button>
					</Form.Item>
				</Form>
				<Flex
					align={"start"}
					gap={8}
					justify={"space-between"}
				>
					<Typography.Text>
						Did not receive the email? Check your spam filter, or
					</Typography.Text>
					<Link to={ROUTES.PAGES_AUTHENTICATION_CODE_VERIFICATION}
								style={{ whiteSpace: "nowrap" }}>
						Resend code
					</Link>
				</Flex>
			</Card>
		</Auth>
	)
}

export { VerificationCode }
