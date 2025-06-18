import { Link } from "@tanstack/react-router"
import { Button, Flex, Form, Input, Typography } from "antd"
import { type FC } from "react"
import { ROUTES } from "src/shared/config"
import { FORM_DEFAULT } from "src/shared/constants"
import { Title } from "src/shared/ui"

const VerificationCode: FC = () => {
	return (
		<>
			<Flex
				align={"end"}
				justify={"space-between"}
				style={{ marginBottom: 4 }}
			>
				<Title level={3}>Enter Verification Code</Title>
				<Link to={ROUTES.PAGES_AUTHENTICATION_LOGIN}>Back to Login</Link>
			</Flex>
			<Typography.Text>We send you on mail.</Typography.Text>
			<Form
				{...FORM_DEFAULT}
				name={"Forgot Password Form"}
				size={"large"}
				style={{ marginTop: 24 }}
			>
				<Form.Item
					name={"code"}
					label={"We`ve send you code on jone. ****@company.com"}
					rules={[{ required: true }]}
				>
					<Input.OTP
						length={4}
						style={{ width: "100%" }}
					/>
				</Form.Item>
				<Form.Item
					style={{
						marginTop: 24,
						marginBottom: 24,
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
				<Typography.Text>Did not receive the email? Check your spam filter, or</Typography.Text>
				<Link
					to={ROUTES.PAGES_AUTHENTICATION_CODE_VERIFICATION}
					style={{ whiteSpace: "nowrap" }}
				>
					Resend code
				</Link>
			</Flex>
		</>
	)
}

export default VerificationCode
